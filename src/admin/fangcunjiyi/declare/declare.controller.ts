import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { DeclareService } from './service/declare.service';
import { QueryDeclareDto, CreateDeclareDto, UpdateDeclareDto } from './dto/index';
import { Response } from 'express';
import { declarex } from '@/common/prisma-client';

@ApiBearerAuth()
@ApiTags('声明管理')
@Controller('/fangcunjiyi/declare')
export class DeclareController {
  private readonly logger = new Logger(DeclareController.name);
  constructor(private declareService: DeclareService) {}

  @ApiOperation({ summary: '查询 declare 列表' })
  @ApiResponse({ type: Result<declarex[]> })
  @RequirePermission('fangcunjiyi:declare:query')
  @Get('/list')
  async listDeclare(@Query() q: QueryDeclareDto): Promise<Result<declarex[]>> {
    return Result.ok(await this.declareService.selectDeclareList(q));
  }

  @ApiOperation({ summary: '导出 declare 管理xlsx文件' })
  @RequirePermission('fangcunjiyi:declare:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.declareService.exportDeclare(res);
  }

  @ApiOperation({ summary: '查询 declare 管理详细' })
  @ApiResponse({ type: Result<declarex> })
  @RequirePermission('fangcunjiyi:declare:query')
  @Get('/:declareId')
  async getDeclare(@Param('declareId', ParseIntPipe) declareId: number): Promise<Result<declarex>> {
    this.logger.log('222222');
    return Result.ok(await this.declareService.selectDeclareById(declareId));
  }

  @ApiOperation({ summary: '新增 declare ' })
  @ApiResponse({ type: Result<declarex> })
  @ApiBody({ type: CreateDeclareDto })
  @RequirePermission('fangcunjiyi:declare:add')
  @Post('/')
  async addDeclare(@Body() declarex: CreateDeclareDto, @Req() req): Promise<Result<declarex>> {
    declarex = {
      ...declarex,
      create_time: nowDateTime(),
      update_time: nowDateTime(),
      create_by: req.user?.userName,
      update_by: req.user?.userName,
    };
    return Result.ok(await this.declareService.addDeclare(declarex));
  }

  @ApiOperation({ summary: '修改 declare' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateDeclareDto })
  @RequirePermission('fangcunjiyi:declare:edit')
  @Put('/')
  async updateDeclare(@Body() declarex: UpdateDeclareDto, @Req() req): Promise<Result<any>> {
    declarex = {
      ...declarex,
      update_time: nowDateTime(),
      update_by: req.user?.userName,
    };
    await this.declareService.updateDeclare(declarex);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 declare' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('fangcunjiyi:declare:remove')
  @Delete('/:ids')
  async delDeclare(@Param('ids', ParseIntArrayPipe) declareIds: number[]): Promise<Result<any>> {
    const { count } = await this.declareService.deleteDeclareByIds(declareIds);
    return Result.toAjax(count);
  }
}
