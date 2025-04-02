import { PrismaService } from '@/common/service/prisma/prisma.service';
import { QueryTicketDto, CreateTicketDto } from '../dto';
import { Injectable } from '@nestjs/common';
import { exportTable } from '@/common/utils';
import { query, Response } from 'express';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import { weightSrvRecords } from 'ioredis/built/cluster/util';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService) {}

  async selectTicketList(q: QueryTicketDto) {
    const queryCondition: Prisma.ticketWhereInput = {};
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
    return await this.prisma.ticket.findMany({
      where: queryCondition,
    });
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

  async addTicket(ticket: CreateTicketDto) {
    return await this.prisma.ticket.create({
      data: ticket,
    });
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
    // collection 存在就不能删除数据
    return this.prisma.ticket.deleteMany({
      where: {
        id: {
          in: ids,
        },
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
