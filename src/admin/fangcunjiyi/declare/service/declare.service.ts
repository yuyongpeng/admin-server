import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryDeclareDto, CreateDeclareDto, UpdateDeclareDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class DeclareService {
  private readonly logger = new Logger(DeclareService.name, { timestamp: true });
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询declare管理列表 */
  async selectDeclareList(q: QueryDeclareDto) {
    const queryCondition: Prisma.declarexWhereInput = {};
    if (isNotEmpty(q['id'])) {
      queryCondition.id = {
        equals: q.id,
      };
    }
    if (isNotEmpty(q['name'])) {
      queryCondition.name = {
        equals: q.name,
      };
    }
    if (isNotEmpty(q['types'])) {
      queryCondition.types = {
        equals: q.types,
      };
    }
    if (isNotEmpty(q['status'])) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    if (isNotEmpty(q['createBy'])) {
      queryCondition.create_by = {
        equals: q.createBy,
      };
    }
    if (isNotEmpty(q.params.beginCreateTime) && isNotEmpty(q.params.endCreateTime)) {
      queryCondition.create_time = {
        lte: q.params.endCreateTime,
        gte: q.params.beginCreateTime,
      };
    }
    if (isNotEmpty(q['updateBy'])) {
      queryCondition.update_by = {
        equals: q.updateBy,
      };
    }
    if (isNotEmpty(q.params.beginUpdateTime) && isNotEmpty(q.params.endUpdateTime)) {
      queryCondition.update_time = {
        lte: q.params.endUpdateTime,
        gte: q.params.beginUpdateTime,
      };
    }
    return await this.prisma.declarex.findMany({
      where: queryCondition,
    });
  }

  /**@description 查询 declare 详情 */
  async selectDeclareById(id: number) {
    this.logger.log('1111111111111111111');
    return this.prisma.declarex.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**@description 新增 declare 管理 */
  async addDeclare(declare: CreateDeclareDto) {
    //删除掉空值
    for (const key in declare) {
      !isNotEmpty(declare[key]) && delete declare[key];
    }
    return await this.prisma.declarex.create({
      data: declare,
    });
  }

  /**@description 修改 declare 管理 */
  async updateDeclare(declare: UpdateDeclareDto) {
    //删除掉空值
    for (const key in declare) {
      !isNotEmpty(declare[key]) && delete declare[key];
    }
    return await this.prisma.declarex.update({
      where: {
        id: declare.id,
      },
      data: declare,
    });
  }

  /**@description 批量删除 declare 管理 */
  async deleteDeclareByIds(declareIds: number[]) {
    return this.prisma.declarex.updateMany({
      where: {
        id: {
          in: declareIds,
        },
      },
      data: {
        status: 1,
      },
    });
  }

  /**@description 单个删除部门管理 */
  async deleteDeclareById(id: number) {
    return this.prisma.declarex.update({
      where: {
        id: id,
      },
      data: {
        status: 1,
      },
    });
  }

  /**@description 导出 declare 所有数据为xlsx */
  async exportDeclare(res: Response) {
    const title = ['declare id', 'name', '内容', '类型', '删除标志（0存在,1删除 ）', '创建者', '创建时间', '更新者', '更新时间'];
    const data = (
      await this.prisma.declarex.findMany({
        select: {
          id: true,
          name: true,
          content: true,
          types: true,
          status: true,
          create_by: true,
          create_time: true,
          update_by: true,
          update_time: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }
}
