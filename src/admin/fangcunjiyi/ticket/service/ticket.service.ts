import { PrismaService } from '@/common/service/prisma/prisma.service';
import { QueryTicketDto, CreateTicketDto, CreateTicketDto4Golang, SaleStatusDto } from '../dto';
import { Injectable, Logger } from '@nestjs/common';
import { exportTable } from '@/common/utils';
import { query, Response } from 'express';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import { weightSrvRecords } from 'ioredis/built/cluster/util';
import axios from 'axios';
import { Config } from '@/config';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);
  constructor(private prisma: PrismaService) {}

  async selectTicketList(q: QueryTicketDto) {
    const queryCondition: Prisma.ticketWhereInput = {};
    // 只显示正常的数据
    queryCondition.available_status = {
      equals: 1,
    };
    if (isNotEmpty(q['ticket_name'])) {
      queryCondition.ticket_name = {
        equals: q.ticket_name,
      };
    }
    if (isNotEmpty(q['ticket_type'])) {
      queryCondition.ticket_type = {
        equals: q.ticket_type,
      };
    }
    if (isNotEmpty(q['sale_status'])) {
      queryCondition.sale_status = {
        equals: q.sale_status,
      };
    }
    if (isNotEmpty(q['available_status'])) {
      queryCondition.available_status = {
        equals: q.available_status,
      };
    }
    // return await this.prisma.ticket.findMany({
    //   where: queryCondition,
    // });
    return {
      rows: await this.prisma.ticket.findMany({
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
      total: await this.prisma.ticket.count({
        where: queryCondition,
      }),
    };
  }

  // 给别的页面 列表显示 ticket的数据。
  async selectAllTickets() {
    return await this.prisma.ticket.findMany({
      // select: {
      //   id: true,
      //   ticket_name: true,
      // },
      where: {
        available_status: 1,
      },
    });
  }

  async selectTicketById(ticketId: number) {
    return await this.prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });
  }

  async addTicket(ticket: CreateTicketDto4Golang): Promise<any> {
    let url: string = Config.dstamp.baseUrl + '/ticket/create';
    let postData = ticket;
    // let postData = {
    //   ticket_type: 2,
    //   landing_uri: 'https://daop-img.stars-mine.com/image/75/65/75659ae0f579c09d85b932b5413e3462f2300861.jpg',
    //   origin_uri: 'https://daop-img.stars-mine.com/image/ee/43/ee43b75c86ad8c1b31f3b1c1be21dc5e1858752e.jpg',
    //   cover_uri: 'https://daop-img.stars-mine.com/image/52/05/52050a74ffb17006643281cd53838a51dc67e413.png',
    //   publisher_logo: 'https://daop-img.stars-mine.com/image/15/6d/156d9408d95dff268717c6f64affe24f3d56c3c4.png',
    //   ticket_name: 'test',
    //   price: 0,
    //   amount: 2,
    //   registration_id: 10000,
    //   description: 'https://daop-img.stars-mine.com/image/fc/06/fc06c5a95427d9ad22d9d08c74bb29513b8fd1b4.jpg',
    //   publisher_name: 'xxxx',
    // };
    let headers = {
      'Content-Type': 'application/json',
      'user-id': 15,
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZiIsIm9wZW5faWQiOiJvRGdpODRuV0szSUVOQ0RTR1ZvOWZXVUpCMnJrIiwidW5pb25faWQiOiJvdndSVDV4XzFOUGQxRGJndVA3ME40bFZKdlpzIiwidGtfdXVpZCI6Ijk2NjZkM2U4LTA1MWUtNDhlZi04YzNkLTMyMmY2MzFmM2U1NiIsImV4cCI6MTc1MDQzMzE1M30.--bJEmYdzhnmtGmvfn4EYhiTWq78RMK4AJaYeqspbNU',
      'open-id': 'oDgi84nWK3IENCDSGVo9fWUJB2rk',
    };
    let response = await axios.post(url, postData, { headers: headers, timeout: 50000 });
    this.logger.log(response.data);

    return response.data;
  }

  /**@description 发售 */
  async saleStatus(sale: SaleStatusDto): Promise<any> {
    let url = Config.dstamp.baseUrl + 'ticket/creator/saleStatus';
    let postData = sale;
    let headers = {
      'Content-Type': 'application/json',
      'user-id': 15,
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZiIsIm9wZW5faWQiOiJvRGdpODRuV0szSUVOQ0RTR1ZvOWZXVUpCMnJrIiwidW5pb25faWQiOiJvdndSVDV4XzFOUGQxRGJndVA3ME40bFZKdlpzIiwidGtfdXVpZCI6Ijk2NjZkM2U4LTA1MWUtNDhlZi04YzNkLTMyMmY2MzFmM2U1NiIsImV4cCI6MTc1MDQzMzE1M30.--bJEmYdzhnmtGmvfn4EYhiTWq78RMK4AJaYeqspbNU',
      'open-id': 'oDgi84nWK3IENCDSGVo9fWUJB2rk',
    };
    let response = await axios.post(url, postData, { headers: headers, timeout: 50000 });
    this.logger.log(response.data);
    return response.data;
  }

  async updateTicket(ticket: CreateTicketDto) {
    return await this.prisma.ticket.update({
      where: {
        id: ticket.id,
      },
      data: ticket,
    });
  }

  async deleteTicketByIds(ids: number[]) {
    // return this.prisma.ticket.deleteMany({
    //   where: {
    //     id: {
    //       in: ids,
    //     },
    //   },
    // });
    return this.prisma.ticket.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data: {
        available_status: 2,
      },
    });
  }

  async exportTicket(res: Response) {
    const title = ['部门id', '父部门', '祖级列表', '部门名称', '显示顺序', '负责人', '联系电话', '邮箱', '部门状态（0停用,1正常）', '删除标志（0删除,1存在 ）', '创建者', '创建时间', '更新者', '更新时间'];
    const data = (await this.prisma.ticket.findMany()).map((v) => Object.values(v));
    data.unshift(title);
    exportTable(data, res);
  }
}
