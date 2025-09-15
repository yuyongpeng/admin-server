import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { RecommendImgService } from './service/recommendimg.service';
import { QueryRecommendImgDto, CreateRecommendImgDto, UpdateRecommendImgDto } from './dto/index';
import { Response } from 'express';
import { recommend_img, resource } from '@/common/prisma-client';
import { TableDataInfo } from '@/common/domain/TableDataInfo';

@ApiBearerAuth()
@ApiTags('recommendImg管理')
@Controller('fangcunjiyi/recommendimg')
export class RecommendImgController {
  constructor(private recommendImgService: RecommendImgService) {}

  @ApiOperation({ summary: '查询 recommendImg 列表' })
  @ApiResponse({ type: TableDataInfo<recommend_img> })
  @RequirePermission('system:recommendimg:query')
  @Get('/list')
  async listRecommendImg(@Query() q: QueryRecommendImgDto): Promise<TableDataInfo<recommend_img>> {
    console.log('xxxxxxxxxxx');
    return Result.TableData(await this.recommendImgService.selectRecommendImgList(q));
  }

  @ApiOperation({ summary: '导出 recommendImg xlsx文件' })
  @RequirePermission('system:recommendimg:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.recommendImgService.exportRecommendImg(res);
  }

  @ApiOperation({ summary: '查询 recommendImg 详细信息' })
  @ApiResponse({ type: Result<recommend_img> })
  @RequirePermission('system:recommendimg:query')
  @Get('/:id')
  async getRecommendImg(@Param('id', ParseIntPipe) id: number): Promise<Result<recommend_img>> {
    return Result.ok(await this.recommendImgService.selectRecommendImgById(id));
  }

  @ApiOperation({ summary: '新增 recommendImg' })
  @ApiResponse({ type: Result<recommend_img> })
  @ApiBody({ type: CreateRecommendImgDto })
  @RequirePermission('system:recommendimg:add')
  @Post('/')
  async addRecommendImg(@Body() recommendImg: CreateRecommendImgDto, @Req() req): Promise<Result<recommend_img>> {
    recommendImg = {
      ...recommendImg,
      create_time: nowDateTime(),
      update_time: nowDateTime(),
      create_by: req.user?.userName,
      update_by: req.user?.userName,
    };
    return Result.ok(await this.recommendImgService.addRecommendImg(recommendImg));
  }

  @ApiOperation({ summary: '修改 recommendImg 管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateRecommendImgDto })
  @RequirePermission('system:recommendimg:edit')
  @Put('/')
  async updateRecommendImg(@Body() recommendImg: UpdateRecommendImgDto, @Req() req): Promise<Result<any>> {
    recommendImg = {
      ...recommendImg,
      update_time: nowDateTime(),
      update_by: req.user?.userName,
    };
    await this.recommendImgService.updateDept(recommendImg);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 recommendImg ' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:recommendimg:remove')
  @Delete('/:ids')
  async delRecommendImg(@Param('ids', ParseIntArrayPipe) ids: number[]): Promise<Result<any>> {
    const { count } = await this.recommendImgService.deleteRecommendImgByIds(ids);
    return Result.toAjax(count);
  }
}
