import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { TransferService } from './service/transfer.service';
import { QueryTransferDto, CreateTransferDto, UpdateTransferDto } from './dto/index';
import { Response } from 'express';
import { tr_transfer } from '@/common/prisma-client';
import { TableDataInfo } from '@/common/domain/TableDataInfo';

@ApiBearerAuth()
@ApiTags('transfer管理')
@Controller('fangcunjiyi/transfer')
export class TransferController {
  constructor(private transferService: TransferService) {}

  @ApiOperation({ summary: '查询 tr_transfer 列表' })
  @ApiResponse({ type: TableDataInfo<tr_transfer> })
  @RequirePermission('fangcunjiyi:transfer:query')
  @Get('/list')
  async listTransfer(@Query() q: QueryTransferDto): Promise<TableDataInfo<tr_transfer>> {
    return Result.TableData(await this.transferService.selectTransferList(q));
  }

  @ApiOperation({ summary: '导出 transfer xlsx文件' })
  @RequirePermission('fangcunjiyi:transfer:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.transferService.exportTransfer(res);
  }

  @ApiOperation({ summary: '查询 tr_transfer 详细信息' })
  @ApiResponse({ type: Result<tr_transfer> })
  @RequirePermission('fangcunjiyi:transfer:query')
  @Get('/:transferId')
  async getTransfer(@Param('transferId', ParseIntPipe) transferId: number): Promise<Result<tr_transfer>> {
    return Result.ok(await this.transferService.selectTransferById(transferId));
  }

  @ApiOperation({ summary: '新增 tr_transfer' })
  @ApiResponse({ type: Result<tr_transfer> })
  @ApiBody({ type: CreateTransferDto })
  @RequirePermission('fangcunjiyi:transfer:add')
  @Post('/')
  async addTransfer(@Body() transfer: CreateTransferDto, @Req() req): Promise<Result<tr_transfer>> {
    transfer = {
      ...transfer,
      create_time: nowDateTime(),
      update_time: nowDateTime(),
      create_by: req.user?.userName,
      update_by: req.user?.userName,
    };
    return Result.ok(await this.transferService.addTransfer(transfer));
  }

  @ApiOperation({ summary: '修改 tr_transfer 管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateTransferDto })
  @RequirePermission('fangcunjiyi:transfer:edit')
  @Put('/')
  async updateTransfer(@Body() transfer: UpdateTransferDto, @Req() req): Promise<Result<any>> {
    transfer = {
      ...transfer,
      update_time: nowDateTime(),
      update_by: req.user?.userName,
    };
    await this.transferService.updateTransfer(transfer);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 tr_transfer ' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('fangcunjiyi:transfer:remove')
  @Delete('/:ids')
  async delTransfer(@Param('ids', ParseIntArrayPipe) transferIds: number[]): Promise<Result<any>> {
    const { count } = await this.transferService.deleteTransferByIds(transferIds);
    return Result.toAjax(count);
  }
}
