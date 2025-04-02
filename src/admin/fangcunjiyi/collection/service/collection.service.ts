import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryCollectionDto, CreateCollectionDto, UpdateCollectionDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';

@Injectable()
export class CollectionService {
  constructor(private prisma: PrismaService) {}

  /**@description 分页查询 collection 列表 */
  async selectCollectionList(q: QueryCollectionDto) {
    const queryCondition: Prisma.collectionWhereInput = {};
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
    return await this.prisma.collection.findMany({
      where: queryCondition,
    });
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
}
