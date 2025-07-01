import { Injectable, Logger, Res } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryTransferDto, CreateTransferDto, UpdateTransferDto, queryDateDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { equals, isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class TransferService {
  private readonly logger = new Logger(TransferService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 tr_transfer 列表 */
  async selectTransferList(q: QueryTransferDto) {
    const queryCondition: Prisma.tr_transferWhereInput = {};
    if (isNotEmpty(q['id'])) {
      queryCondition.id = {
        equals: q.id,
      };
    }
    if (isNotEmpty(q['collection_id'])) {
      queryCondition.collection_id = {
        equals: q.collection_id,
      };
    }
    if (isNotEmpty(q['token_id'])) {
      queryCondition.token_id = {
        contains: q.token_id,
      };
    }
    if (isNotEmpty(q['chain_status'])) {
      queryCondition.chain_status = {
        equals: q.chain_status,
      };
    }
    if (isNotEmpty(q['receiver_mobile'])) {
      queryCondition.receiver_mobile = {
        equals: q.receiver_mobile,
      };
    }
    if (isNotEmpty(q['tx_id'])) {
      queryCondition.tx_id = {
        equals: q.tx_id,
      };
    }
    if (isNotEmpty(q['transfer_type'])) {
      queryCondition.transfer_type = {
        equals: q.transfer_type,
      };
    }
    return {
      rows: await this.prisma.tr_transfer.findMany({
        relationLoadStrategy: 'query',
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: 'desc',
        },
        include: {
          collection: {
            select: {
              id: true,
              collection_name: true,
            },
          },
        },
      }),
      total: await this.prisma.tr_transfer.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询 tr_transfer 详情 */
  async selectTransferById(id: number) {
    return this.prisma.tr_transfer.findUnique({
      where: {
        id: id,
      },
      include: {
        collection: {
          select: {
            id: true,
            collection_name: true,
          },
        },
      },
    });
  }

  /**@description 新增 tr_transfer */
  async addTransfer(transfer: CreateTransferDto) {
    //删除掉空值
    for (const key in transfer) {
      !isNotEmpty(transfer[key]) && delete transfer[key];
    }
    return await this.prisma.tr_transfer.create({
      data: transfer,
    });
  }

  /**@description 修改 tr_transfer */
  async updateTransfer(transfer: UpdateTransferDto) {
    //删除掉空值
    for (const key in transfer) {
      !isNotEmpty(transfer[key]) && delete transfer[key];
    }
    return await this.prisma.tr_transfer.update({
      where: {
        id: transfer.id,
      },
      data: transfer,
    });
  }

  /**@description 批量删除 tr_transfer */
  async deleteTransferByIds(ids: number[]) {
    return this.prisma.tr_transfer.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 tr_transfer */
  async deleteTransferById(id: number) {
    return this.prisma.tr_transfer.deleteMany({
      where: {
        id: id,
      },
    });
  }

  /**@description 导出部门管理所有数据为xlsx */
  async exportTransfer(res: Response) {
    const title = ['id', 'collection_id', 'token_id', 'tx_id', 'transfer_name', 'transfer_uid', 'receiver_name', 'receiver_uid', 'receiver_mobile', 'modify_time', 'create_time'];
    const data = (
      await this.prisma.tr_transfer.findMany({
        select: {
          id: true,
          collection_id: true,
          tx_id: true,
          transfer_name: true,
          transfer_uid: true,
          receiver_name: true,
          receiver_uid: true,
          receiver_mobile: true,
          modify_time: true,
          create_time: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }

  /**@description 查询所有 转增 的领取情况 */
  async queryTransferDayCount() {
    return this.prisma.transfer_day_count.findMany({
      where: {},
    });
  }

  /**@description 查询 指定 转增 的领取情况 */
  async queryTransferDayTicketCount(ticketId: number) {
    return this.prisma.transfer_day_ticket_count.findMany({
      where: {
        ticket_id: ticketId,
      },
    });
  }

  // 查询特定时间范围内，邮折下 藏品 的领取数量统计
  async queryCollectionTicketCount(q: queryDateDto) {
    const queryCondition: Prisma.transfer_day_ticket_countWhereInput = {};
    let arrs = [];
    if (isNotEmpty(q['start_date'])) {
      arrs.push({
        t_day: {
          // gte: new Date(q.start_date),
          gte: q.start_date,
        },
      });
    }
    if (isNotEmpty(q['end_date'])) {
      arrs.push({
        t_day: {
          // lte: new Date(q.end_date),
          lte: q.end_date,
        },
      });
    }
    queryCondition.AND = arrs;
    return this.prisma.transfer_day_ticket_count.groupBy({
      by: ['ticket_id', 'ticket_name'],
      where: queryCondition,
      _sum: {
        sum: true,
      },
      orderBy: {
        ticket_id: 'desc',
      },
    });
  }
}
