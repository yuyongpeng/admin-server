import { Injectable, Logger, Res } from '@nestjs/common';
import { PrismaService } from '@/common/service/prisma/prisma.service';
import { Response } from 'express';
import { exportTable, tree } from '@/common/utils';
import { QueryResourceDto, CreateResourceDto, UpdateResourceDto } from '../dto/index';
import { Prisma } from '@/common/prisma-client';
import { isNotEmpty } from 'class-validator';
import * as assert from 'assert';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
import { Config } from '@/config';
import { MakeripException } from '@/common/exception/MakeripException';
import { DstampError, DaopSjtHideError } from '@/common/exception/DaopException';

@Injectable()
export class ResourceService {
  private readonly logger = new Logger(ResourceService.name);
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

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

  // 调用苏结通的删除NFT的接口
  async sjtHide(assetNumber: string) {
    let url = new URL('/sjt/hidden', Config.dstamp.baseUrl);
    url.searchParams.append('assetNumber', assetNumber);
    this.logger.log(url);
    this.logger.log('assetNumber=' + assetNumber);
    let response = await axios.post(Config.dstamp.baseUrl + '/sjt/hidden', {
      params: {
        assetNumber: assetNumber,
      },
      headers: {
        user: 'dstampxy',
        pass: 'eyJ1c2VyX2lkIjoiZiIsIm',
      },
    });
    let data = response.data;
    this.logger.log(data);
    data.cost;
    let success = false;
    if (data.code == 0) {
      success = true;
    } else {
      let error = new DstampError();
      this.logger.error(error.name);
      throw error;
    }
    return {
      success: success,
      data: data,
    };
  }

  // 获取授权code
  // 返回json格式如下：
  // {
  // "status":STATUS,
  // "message":MESSAGE,
  // "code":CODE
  // }
  async getOauthCode(client_id: string, state = '0') {
    let url = Config.makerip.baseUrl + '/oauth/code' + '?' + 'client_id=' + client_id;
    let response = await axios.get(url);
    return response;
    // let code = response.code;
    // let status = response.status;
    // if (status == '200') {
    //   return;
    // }
  }
  async getOauthToken(client_id: string, client_secret: string, code: string) {
    let url = Config.makerip.baseUrl + '/oauth/token' + '?' + 'client_id=' + client_id;
    +'&client_secret=' + client_secret;
    +'&grant_type=authorization_code';
    +'&code=' + code;
    let response = await axios.get(url);
    let status = response.status;
    if (status > 0) {
      this.logger.error('makerip 请求失败', response);
      throw new MakeripException('makerip 请求失败');
    }
    return response;
  }

  // 刷新token
  async refreshOauthToken(client_id: string, refresh_token: string) {
    let url = Config.makerip.baseUrl + '/oauth/refresh' + '?' + 'client_id=' + client_id;
    +'&refresh_token=' + refresh_token;
    let response = await axios.get(url);
    let status = response.status;
    if (status > 0) {
      this.logger.error('makerip 请求失败', response);
      throw new MakeripException('makerip 请求失败');
    }
    return response;
  }

  // 实名认证
  async idcardCheck(client_id: string, access_token: string, realName: string, idCard: string) {
    let url = Config.makerip.baseUrl + '/oauth/refresh' + '?' + 'client_id=' + client_id;
    +'&access_token=' + access_token;
    +'&realName=' + realName;
    +'&IDcard=' + idCard;

    let response = await axios.get(url);
    let status = response.status;
    if (status > 0) {
      this.logger.error('makerip 请求失败', response);
      throw new MakeripException('makerip 请求失败');
    }
    return response;
  }

  // async function preUpload(filname: string, username: string, userID string, usertype string,linkUserId)
}
