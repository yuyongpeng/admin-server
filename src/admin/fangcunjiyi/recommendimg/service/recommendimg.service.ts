import { Injectable, Logger, Res } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryRecommendImgDto, CreateRecommendImgDto, UpdateRecommendImgDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { equals, isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class RecommendImgService {
  private readonly logger = new Logger(RecommendImgService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 recommendImg 列表 */
  async selectRecommendImgList(q: QueryRecommendImgDto) {
    const queryCondition: Prisma.recommend_imgWhereInput = {};
    if (isNotEmpty(q['id'])) {
      queryCondition.id = {
        equals: q.id,
      };
    }
    if (isNotEmpty(q['name'])) {
      queryCondition.name = {
        contains: q.name,
      };
    }
    if (isNotEmpty(q['status'])) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    if (isNotEmpty(q['recommend'])) {
      queryCondition.recommend = {
        equals: q.recommend,
      };
    }
    return {
      rows: await this.prisma.recommend_img.findMany({
        relationLoadStrategy: 'query',
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: 'desc',
        },
        // include: {},
      }),
      total: await this.prisma.recommend_img.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询 recommendImg 详情 */
  async selectRecommendImgById(id: number) {
    return this.prisma.recommend_img.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**@description 新增 recommendImg */
  async addRecommendImg(recommendImg: CreateRecommendImgDto) {
    //删除掉空值
    for (const key in recommendImg) {
      !isNotEmpty(recommendImg[key]) && delete recommendImg[key];
    }
    return await this.prisma.recommend_img.create({
      data: recommendImg,
    });
  }

  /**@description 修改 recommendImg */
  async updateDept(recommendImg: UpdateRecommendImgDto) {
    //删除掉空值
    for (const key in recommendImg) {
      !isNotEmpty(recommendImg[key]) && delete recommendImg[key];
    }
    return await this.prisma.recommend_img.update({
      where: {
        id: recommendImg.id,
      },
      data: recommendImg,
    });
  }

  /**@description 批量删除 recommendImg */
  async deleteRecommendImgByIds(ids: number[]) {
    return this.prisma.recommend_img.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 recommendImg */
  async deleteRecommendImgById(id: number) {
    return this.prisma.recommend_img.deleteMany({
      where: {
        id: id,
      },
    });
  }

  /**@description 导出所有数据为xlsx */
  async exportRecommendImg(res: Response) {
    const title = ['id', 'name', '图片', '链接', '排序', '创建者', '创建时间', '更新者', '更新时间', '状态（0-正常，1-删除）', '备注'];
    const data = (
      await this.prisma.recommend_img.findMany({
        select: {
          id: true,
          name: true,
          img: true,
          link: true,
          order: true,
          create_by: true,
          create_time: true,
          update_by: true,
          update_time: true,
          status: true,
          remark: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }
}
