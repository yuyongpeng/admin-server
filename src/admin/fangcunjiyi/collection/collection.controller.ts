import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { CollectionService } from './service/collection.service';
import { QueryCollectionDto, CreateCollectionDto, UpdateCollectionDto, queryDateDto } from './dto/index';
import { Response } from 'express';
import { collection, collection_day_count, collection_day_ticket_count } from '@/common/prisma-client';
import { TableDataInfo } from '@/common/domain/TableDataInfo';
import { Prisma } from '@/common/prisma-client';

@ApiBearerAuth()
@ApiTags('collection 管理')
@Controller('fangcunjiyi/collection')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @ApiOperation({ summary: '查询 collection 管理列表' })
  @ApiResponse({ type: TableDataInfo<collection> })
  @RequirePermission('fangcunjiyi:collection:query')
  @Get('/list')
  async listCollection(@Query() q: QueryCollectionDto): Promise<TableDataInfo<collection>> {
    return Result.TableData(await this.collectionService.selectCollectionList(q));
  }

  @ApiOperation({ summary: '导出 collection 管理xlsx文件' })
  @RequirePermission('fangcunjiyi:collection:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    // return this.collectionService.exportQrcodeUrl(res, 4);
    return this.collectionService.exportCollection(res);
  }

  @ApiOperation({ summary: '导出 collection 中对应 ticket 的 qrcode码对应的URL xlsx文件' })
  @RequirePermission('fangcunjiyi:collection:export')
  @Get('/export/:ticketId')
  async export4Ticket(@Param('ticketId', ParseIntPipe) ticketId: number, @Res() res: Response): Promise<void> {
    return this.collectionService.exportQrcodeUrl(res, ticketId);
  }

  @ApiOperation({ summary: '查询 collection 管理详细' })
  @ApiResponse({ type: Result<collection> })
  @RequirePermission('fangcunjiyi:collection:query')
  @Get('/:collectionId')
  async getDept(@Param('collectionId', ParseIntPipe) deptId: number): Promise<Result<collection>> {
    return Result.ok(await this.collectionService.selectCollectionById(deptId));
  }

  @ApiOperation({ summary: '新增 collection 管理' })
  @ApiResponse({ type: Result<collection> })
  @ApiBody({ type: CreateCollectionDto })
  @RequirePermission('fangcunjiyi:collection:add')
  @Post('/')
  async addDept(@Body() collectionDto: CreateCollectionDto, @Req() req): Promise<Result<collection>> {
    collectionDto = {
      ...collectionDto,
      modify_time: nowDateTime(),
      create_time: nowDateTime(),
    };
    return Result.ok(await this.collectionService.addCollection(collectionDto));
  }

  @ApiOperation({ summary: '修改 collection' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateCollectionDto })
  @RequirePermission('fangcunjiyi:collection:edit')
  @Put('/')
  async updateDept(@Body() collection: UpdateCollectionDto, @Req() req): Promise<Result<any>> {
    collection = {
      ...collection,
      modify_time: nowDateTime(),
    };
    await this.collectionService.updateCollection(collection);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 collection' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('fangcunjiyi:collection:del')
  @Delete('/:ids')
  async delDept(@Param('ids', ParseIntArrayPipe) collectionIds: number[]): Promise<Result<any>> {
    const { count } = await this.collectionService.deleteCollectionByIds(collectionIds);
    return Result.toAjax(count);
  }

  @ApiOperation({ summary: '查询藏品按照 天 统计的数量' })
  @ApiResponse({ type: Result<collection_day_count[]> })
  @RequirePermission('fangcunjiyi:collection:query')
  @Get('/daycount/:ticketid')
  async queryCollectionDayCount(@Param('ticketid', ParseIntPipe) ticketId: number): Promise<Result<collection_day_count[]>> {
    return Result.Ok(await this.collectionService.queryCollectionDayCount());
  }

  @ApiOperation({ summary: '查询藏品按照 天 统计的数量' })
  @ApiResponse({ type: Result<collection_day_ticket_count[]> })
  @RequirePermission('fangcunjiyi:collection:query')
  @Get('/daycountticket/:ticketid')
  async queryCollectionDayTicketCount(@Param('ticketid', ParseIntPipe) ticketId: number): Promise<Result<collection_day_ticket_count[]>> {
    return Result.Ok(await this.collectionService.queryCollectionDayTicketCount(ticketId));
  }

  @ApiOperation({ summary: '按照时间查询 邮折对应的藏品领取数量' })
  // @ApiResponse({ type: Result<collection_day_ticket_count[]> })
  @RequirePermission('fangcunjiyi:collection:query')
  @Post('/countticket')
  async queryCollectionTicketCount(@Body() qdto: queryDateDto, @Req() req) {
    let ret = await this.collectionService.queryCollectionTicketCount(qdto);
    return Result.Ok(ret);
  }
}
