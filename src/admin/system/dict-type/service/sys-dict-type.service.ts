import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { queryDictTypeDto } from '@/admin/system/dict-type/dto/queryDictTypeDto';
import { Prisma } from '@prismaClient';
import { isNotEmpty } from 'class-validator';
import { CreateDictTypeDto } from '@/admin/system/dict-type/dto/createDictTypeDto';
import { updateDictTypeDto } from '@/admin/system/dict-type/dto/updateDictTypeDto';
import { SysDictDataService } from '../../dict-data/service/sys-dict-data.service';
import { ValidationException } from '@/common/exception/ValidationException';
import { Response } from 'express';
import { exportTable } from '@/common/utils';
import { redisUtils } from '@/common/utils/redisUtils';
import { Constants } from '@/common/constant/Constants';

@Injectable()
export class SysDictTypeService {
  constructor(
    private prisma: PrismaService,
    private dictDataService: SysDictDataService,
  ) {}
  //查询字典类型列表
  async selectDictTypeList(q: queryDictTypeDto) {
    const queryCondition: Prisma.SysDictTypeWhereInput = {};
    if (isNotEmpty(q.dictType)) {
      queryCondition.dictType = {
        contains: q.dictType,
      };
    }
    if (isNotEmpty(q.dictName)) {
      queryCondition.dictName = {
        contains: q.dictName,
      };
    }
    if (isNotEmpty(q.status)) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    if (isNotEmpty(q.params?.beginTime) && isNotEmpty(q.params?.endTime)) {
      queryCondition.createTime = {
        gte: q.params.beginTime,
        lte: q.params.endTime,
      };
    }
    return {
      rows: await this.prisma.sysDictType.findMany({
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
      }),
      total: await this.prisma.sysDictType.count({
        where: queryCondition,
      }),
    };
  }

  //查询所有数据
  async selectAllDictType() {
    return this.prisma.sysDictType.findMany();
  }

  //查询字典类型详细
  async selectDictTypeDetail(dictId: number) {
    return await this.prisma.sysDictType.findUnique({
      where: {
        dictId,
      },
    });
  }

  //新增字典类型
  async addDictType(dictType: CreateDictTypeDto) {
    const res = await this.prisma.sysDictType.create({
      data: dictType,
    });
    await redisUtils.set(
      Constants.SYS_DICT_KEY + dictType.dictType,
      JSON.stringify([], null, 2),
    );
    return res;
  }
  //修改字典类型
  async updateDictType(dictType: updateDictTypeDto) {
    const old = await this.prisma.sysDictType.findUnique({
      where: {
        dictId: dictType.dictId,
      },
      include: {
        dictDatas: true,
      },
    });
    if (!old) return { count: 0 };
    return this.prisma.$transaction(async (db) => {
      //如果修改了dictType我们需要同步修改dictDatas中的dictType
      if (old.dictType !== dictType.dictType) {
        await db.sysDictData.updateMany({
          where: {
            dictType: old.dictType,
          },
          data: {
            dictType: dictType.dictType,
          },
        });
      }
      const res = await db.sysDictType.update({
        where: {
          dictId: dictType.dictId,
        },
        data: dictType,
      });
      await this.dictDataService.updateCache(dictType.dictType);
      return res;
    });
  }

  //删除字典类型
  async deleteDictType(dictIds: number[]) {
    const dictTypes = new Set<string>();
    for (const id of dictIds) {
      const r = await this.prisma.sysDictType.findUnique({
        where: {
          dictId: id,
        },
        include: {
          dictDatas: true,
        },
      });
      //如果当前字典类型里面存有子数据，不能删除
      if (r?.dictDatas?.length) {
        throw new ValidationException('当前字典类型下有子数据，不能删除');
      }
      dictTypes.add(Constants.SYS_DICT_KEY + r.dictType);
    }
    const res = await this.prisma.sysDictType.deleteMany({
      where: {
        dictId: {
          in: dictIds,
        },
      },
    });
    for (const k of dictTypes) {
      await redisUtils.del(k);
    }
    return res;
  }

  //刷新字典缓存
  async refreshDictCache() {
    return await this.dictDataService.initSysDictData();
  }

  //导出字典类型为xlsx
  async exportDictType(res: Response) {
    const title = [
      '字典主键',
      '字典名称',
      '字典类型',
      '状态',
      '创建者',
      '创建时间',
      '更新者',
      '更新时间',
      '备注',
    ];
    const data = (await this.prisma.sysDictType.findMany()).map((v) =>
      Object.values(v),
    );
    data.unshift(title);
    exportTable(data, res);
  }
}
