import { Injectable, Logger, Res } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryFCUserDto, CreateFCUserDto, UpdateFCUserDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class FCUserService {
  private readonly logger = new Logger(FCUserService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询部门管理列表 */
  async selectResourceList(q: QueryFCUserDto) {
    const queryCondition: Prisma.userWhereInput = {};
    if (isNotEmpty(q['mobile'])) {
      queryCondition.mobile = {
        equals: q.mobile,
      };
    }
    if (isNotEmpty(q['realname'])) {
      queryCondition.realname = {
        equals: q.realname,
      };
    }
    if (isNotEmpty(q['daop_user_address'])) {
      queryCondition.daop_user_address = {
        contains: q.daop_user_address,
      };
    }
    return {
      rows: await this.prisma.user.findMany({
        relationLoadStrategy: 'query',
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: 'desc',
        },
        include: {
          // ticket: {
          //   select: {
          //     id: true,
          //     ticket_name: true,
          //   },
          // },
        },
      }),
      total: await this.prisma.user.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询user详情 */
  async selectUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**@description 新增 user */
  async addUser(user: CreateFCUserDto) {
    //删除掉空值
    for (const key in user) {
      !isNotEmpty(user[key]) && delete user[key];
    }
    return await this.prisma.user.create({
      data: user,
    });
  }

  /**@description 修改 user */
  async updateUser(user: UpdateFCUserDto) {
    //删除掉空值
    for (const key in user) {
      !isNotEmpty(user[key]) && delete user[key];
    }
    return await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  /**@description 批量删除 user */
  async deleteUserByIds(ids: number[]) {
    return this.prisma.user.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 user */
  async deleteUserByDeptId(id: number) {
    return this.prisma.user.deleteMany({
      where: {
        id: id,
      },
    });
  }

  /**@description 导出数据为xlsx */
  async exportUser(res: Response) {
    const title = ['id', 'mobile', 'id_card_no', 'realname', 'daop_user_address', '创建时间'];
    const data = (
      await this.prisma.user.findMany({
        select: {
          id: true,
          mobile: true,
          realname: true,
          daop_user_address: true,
          create_time: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }

  /**@description 查询 每天新增用户数 */
  async queryUserDayCount() {
    return this.prisma.user_day_count.findMany({
      where: {},
    });
  }

  /**@description 查询 每周新增用户数 */
  async queryUserWeekCount() {
    return this.prisma.user_week_count.findMany({
      where: {},
    });
  }
  /**@description 查询 每月新增用户数 */
  async queryUserMonthCount() {
    return this.prisma.user_month_count.findMany({
      where: {},
    });
  }
}
