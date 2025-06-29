import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryCollectionDto, CreateCollectionDto, UpdateCollectionDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
import { encrypt, decrypt } from '@/common/utils/crypto';
import { Config } from '@/config';

interface qr {
  id: number;
  collection_name: string;
  ticket_id: number;
  qrcode: string;
}

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 collection 列表 */
  async selectCollectionList(q: QueryCollectionDto) {
    const queryCondition: Prisma.collectionWhereInput = {};
    if (isNotEmpty(q['ticket_id'])) {
      queryCondition.ticket_id = {
        equals: q.ticket_id,
      };
    }
    if (isNotEmpty(q['mint_chain_status'])) {
      queryCondition.mint_chain_status = {
        equals: q.mint_chain_status,
      };
    }
    if (isNotEmpty(q['transfer_tx_id'])) {
      queryCondition.transfer_tx_id = {
        equals: q.transfer_tx_id,
      };
    }
    if (isNotEmpty(q['transfer_chain_status'])) {
      queryCondition.transfer_chain_status = {
        equals: q.transfer_chain_status,
      };
    }
    if (isNotEmpty(q['sale_status'])) {
      queryCondition.sale_status = {
        equals: q.sale_status,
      };
    }
    // return await this.prisma.collection.findMany({
    //   where: queryCondition,
    // });
    return {
      rows: await this.prisma.collection.findMany({
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
      total: await this.prisma.collection.count({
        where: queryCondition,
      }),
    };
  }

  /**@description 查询 collection 详情 */
  async selectCollectionById(id: number) {
    return this.prisma.collection.findUnique({
      where: {
        id,
      },
    });
  }

  /**@description 新增 collection */
  async addCollection(collection: CreateCollectionDto) {
    return await this.prisma.collection.create({
      data: collection,
    });
  }

  /**@description 修改 collection */
  async updateCollection(collection: UpdateCollectionDto) {
    return await this.prisma.collection.update({
      where: {
        id: collection.id,
      },
      data: collection,
    });
  }

  /**@description 批量删除部门管理 */
  async deleteCollectionByIds(ids: number[]) {
    return this.prisma.collection.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  /**@description 单个删除 collection */
  async deleteCollectionById(collectionId: number) {
    return this.prisma.collection.deleteMany({
      where: {
        id: collectionId,
      },
    });
  }

  /**@description 导出 url 为xlsx */
  async exportCollection(res: Response) {
    const title = ['id', '藏品名称', '门票ID'];
    const data = (
      await this.prisma.collection.findMany({
        select: {
          id: true,
          collection_name: true,
          ticket_id: true,
        },
      })
    ).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }

  /** @description 导出 对应邮折下的 qrcode 字符串 */
  async exportQrcodeUrl(res: Response, ticketId: number, count?: number) {
    if (!count) {
    }
    const title = ['id', '邮折ID', '名称', '二维码对应的字符串'];
    let ts = await this.prisma.collection.findMany({
      select: {
        id: true,
        ticket_id: true,
        collection_name: true,
      },
      where: {
        sale_status: 1, // 销售状态：0-不可售；1-待售；2-发售中；3-已售出；4-已失效；
        ticket_id: ticketId,
      },
    });

    let data = ts.map((val, index, arr) => {
      let qrcode = Config.qrcode.urlPrefix + 'id=' + val.ticket_id + '#cid=' + encrypt(Config.aes.key, Config.aes.iv, val.id.toString());
      let rx: [number, number, string, string] = [val.id, val.ticket_id, val.collection_name, qrcode];
      return [val.id, val.ticket_id, val.collection_name, qrcode];
    });
    data.unshift(title);
    exportTable(data, res);
  }
}
