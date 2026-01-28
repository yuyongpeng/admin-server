import { Injectable, Logger, Res } from "@nestjs/common";
import { PrismaService } from "@/common/service/prisma/prisma.service";
import { Response } from "express";
import { exportTable, tree } from "@/common/utils";
import { QueryTrorderDto, CreateTrorderDto, UpdateTrorderDto } from "../dto/index";
import { Prisma } from "@/common/prisma-client";
import { equals, isNotEmpty } from "class-validator";
import * as assert from "assert";

@Injectable()
export class SuitService {
  private readonly logger = new Logger(SuitService.name);
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 suit 列表 */
  async selectSuitList(q: QueryTrorderDto) {
    const queryCondition: Prisma.suitWhereInput = {};
    if (isNotEmpty(q["id"])) {
      queryCondition.id = {
        equals: q.id,
      };
    }
    if (isNotEmpty(q["suit_name"])) {
      queryCondition.suit_name = {
        contains: q.suit_name,
      };
    }
    if (isNotEmpty(q["status"])) {
      queryCondition.status = {
        equals: q.status,
      };
    }
    return {
      rows: await this.prisma.suit.findMany({
        relationLoadStrategy: "query",
        skip: (q.pageNum - 1) * q.pageSize,
        take: q.pageSize,
        where: queryCondition,
        orderBy: {
          create_time: "desc",
        },
        // include: {},
      }),
      total: await this.prisma.suit.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询 suit 详情 */
  async selectSuitById(id: number) {
    return this.prisma.suit.findUnique({
      where: {
        id: id,
      },
    });
  }

  /**@description 新增 suit */
  async addSuit(suit: CreateTrorderDto) {
    //删除掉空值
    for (const key in suit) {
      !isNotEmpty(suit[key]) && delete suit[key];
    }
    return await this.prisma.suit.create({
      data: suit,
    });
  }

  /**@description 修改 suit */
  async updateSuit(suit: UpdateTrorderDto) {
    //删除掉空值
    for (const key in suit) {
      !isNotEmpty(suit[key]) && delete suit[key];
    }
    return await this.prisma.suit.update({
      where: {
        id: suit.id,
      },
      data: suit,
    });
  }

  /**@description 批量删除 suit */
  async deleteSuitByIds(ids: number[]) {
    return this.prisma.suit.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 suit */
  async deleteSuitById(id: number) {
    return this.prisma.suit.deleteMany({
      where: {
        id: id,
      },
    });
  }

  /**@description 导出所有数据为xlsx */
  async exportSuit(res: Response) {
    const title = ["id", "套装名称", "套装头图", "套装详情", "套装对应邮折", "创建时间", "更新时间", "状态（0-正常，1-删除）", "备注"];
    const data = (
      await this.prisma.suit.findMany({
        select: {
          id: true,
          suit_name: true,
          header_img: true,
          desc_img: true,
          tickets: true,
          create_time: true,
          modify_time: true,
          status: true,
          desc: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }
}
