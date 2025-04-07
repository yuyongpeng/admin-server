import { Injectable, Logger, Res } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryResourceDto, CreateResourceDto, UpdateResourceDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class ResourceService {
  private readonly logger = new Logger(ResourceService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询部门管理列表 */
  async selectResourceList(q: QueryResourceDto) {
    const queryCondition: Prisma.resourceWhereInput = {};
    if (isNotEmpty(q['id'])) {
      queryCondition.id = {
        equals: q.id,
      };
    }
    if (isNotEmpty(q['ticket_id'])) {
      queryCondition.ticket_id = {
        equals: q.ticket_id,
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
    return {
      rows: await this.prisma.resource.findMany({
        relationLoadStrategy: 'query',
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: 'desc',
        },
        include: {
          ticket: {
            select: {
              id: true,
              ticket_name: true,
            },
          },
        },
      }),
      total: await this.prisma.resource.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询resource详情 */
  async selectResourceById(id: number) {
    return this.prisma.resource.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**@description 新增 resource */
  async addResource(resource: CreateResourceDto) {
    //删除掉空值
    for (const key in resource) {
      !isNotEmpty(resource[key]) && delete resource[key];
    }
    return await this.prisma.resource.create({
      data: resource,
    });
  }

  /**@description 修改 resource */
  async updateDept(resource: UpdateResourceDto) {
    //删除掉空值
    for (const key in resource) {
      !isNotEmpty(resource[key]) && delete resource[key];
    }
    return await this.prisma.resource.update({
      where: {
        id: resource.id,
      },
      data: resource,
    });
  }

  /**@description 批量删除 resource */
  async deleteResourceByIds(ids: number[]) {
    return this.prisma.resource.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 resource */
  async deleteDeptByDeptId(id: number) {
    return this.prisma.resource.deleteMany({
      where: {
        id: id,
      },
    });
  }

  /**@description 导出部门管理所有数据为xlsx */
  async exportDept(res: Response) {
    const title = ['id', 'ticket_id', 'name', '资源URL', '排序', '创建者', '创建时间', '更新者', '更新时间', '状态（0-正常，1-删除）', '备注'];
    const data = (
      await this.prisma.resource.findMany({
        select: {
          id: true,
          ticket_id: true,
          name: true,
          resource_url: true,
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
