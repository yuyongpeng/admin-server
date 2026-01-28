import { Injectable, Logger, Res } from "@nestjs/common";
import { PrismaService } from "@/common/service/prisma/prisma.service";
import { Response } from "express";
import { exportTable, tree } from "@/common/utils";
import { QueryTrorderDto, CreateTrorderDto, UpdateTrorderDto } from "../dto/index";
import { Prisma } from "@/common/prisma-client";
import { equals, isNotEmpty } from "class-validator";
import * as assert from "assert";

@Injectable()
export class TrorderService {
  private readonly logger = new Logger(TrorderService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 suit 列表 */
  async selectSuitList(q: QueryTrorderDto) {
    const queryCondition: Prisma.tr_orderWhereInput = {};
    if (isNotEmpty(q["order_no"])) {
      queryCondition.order_no = {
        contains: q.order_no,
      };
    }
    if (isNotEmpty(q["pay_trade_no"])) {
      queryCondition.pay_trade_no = {
        contains: q.pay_trade_no,
      };
    }
    if (isNotEmpty(q["createTimeStart"])) {
      queryCondition.create_time = {
        lte: q.createTimeStart,
      };
    }
    if (isNotEmpty(q["createTimeEnd"])) {
      queryCondition.create_time = {
        gte: q.createTimeEnd,
      };
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.pay_status = {
        equals: q.pay_status,
      };
    }
    return {
      rows: await this.prisma.tr_order.findMany({
        relationLoadStrategy: "query",
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: "desc",
        },
        // include: {},
      }),
      total: await this.prisma.tr_order.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询 tr_order 详情 */
  async selectTrorderById(id: number) {
    return this.prisma.tr_order.findUnique({
      where: {
        order_id: id,
      },
    });
  }

  /**@description 新增 tr_order */
  // async addTrorder(tr_order: CreateTrorderDto) {
  //   //删除掉空值
  //   for (const key in tr_order) {
  //     !isNotEmpty(tr_order[key]) && delete tr_order[key];
  //   }
  //   return await this.prisma.tr_order.create({
  //     data: tr_order,
  //   });
  // }

  /**@description 修改 tr_order */
  // async updateTrorder(tr_order: UpdateTrorderDto) {
  //   //删除掉空值
  //   for (const key in tr_order) {
  //     !isNotEmpty(tr_order[key]) && delete tr_order[key];
  //   }
  //   return await this.prisma.suit.update({
  //     where: {
  //       id: tr_order.id,
  //     },
  //     data: tr_order,
  //   });
  // }

  /**@description 批量删除 suit */
  // async deleteTrorderByIds(ids: number[]) {
  //   return this.prisma.tr_order.deleteMany({
  //     where: {
  //       id: {
  //         in: ids,
  //       },
  //     },
  //   });
  // }

  /**@description 单个删除 suit */
  // async deleteTrorderById(id: number) {
  //   return this.prisma.tr_order.deleteMany({
  //     where: {
  //       id: id,
  //     },
  //   });
  // }

  /**@description 导出所有数据为xlsx */
  async exportSuit(q: QueryTrorderDto, res: Response) {
    const title = ["id", "方寸记忆订单编号", "支付通道订单编号", "商品名称", "购买者手机号", "下单时间", "单价", "数量", "实付金额", "订单状态"];
    const queryCondition: Prisma.tr_orderWhereInput = {};
    if (isNotEmpty(q["order_no"])) {
      queryCondition.order_no = {
        contains: q.order_no,
      };
    }
    if (isNotEmpty(q["pay_trade_no"])) {
      queryCondition.pay_trade_no = {
        contains: q.pay_trade_no,
      };
    }
    if (isNotEmpty(q["createTimeStart"])) {
      queryCondition.create_time = {
        lte: q.createTimeStart,
      };
    }
    if (isNotEmpty(q["createTimeEnd"])) {
      queryCondition.create_time = {
        gte: q.createTimeEnd,
      };
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.pay_status = {
        equals: q.pay_status,
      };
    }
    const data = (
      await this.prisma.tr_order.findMany({
        select: {
          order_id: true,
          order_no: true,
          pay_trade_no: true,
          ticket_name: true,
          buyer_mobile: true,
          create_time: true,
          price: true,
          amount: true,
          total_price: true,
          status: true,
        },
        where: queryCondition,
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }
}
