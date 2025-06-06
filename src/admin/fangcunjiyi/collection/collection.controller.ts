import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { CollectionService } from './service/collection.service';
import { QueryCollectionDto, CreateCollectionDto, UpdateCollectionDto } from './dto/index';
import { Response } from 'express';
import { collection } from '@/common/prisma-client';

@ApiBearerAuth()
@ApiTags('collection 管理')
@Controller('system/collection')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @ApiOperation({ summary: '查询 collection 管理列表' })
  @ApiResponse({ type: Result<collection[]> })
  @RequirePermission('system:dept:query')
  @Get('/list')
  async listCollection(@Query() q: QueryCollectionDto): Promise<Result<collection[]>> {
    return Result.ok(await this.collectionService.selectCollectionList(q));
  }

  @ApiOperation({ summary: '导出 collection 管理xlsx文件' })
  @RequirePermission('system:collection:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.collectionService.exportCollection(res);
  }

  @ApiOperation({ summary: '查询 collection 管理详细' })
  @ApiResponse({ type: Result<collection> })
  @RequirePermission('system:collection:query')
  @Get('/:collectionId')
  async getDept(@Param('collectionId', ParseIntPipe) deptId: number): Promise<Result<collection>> {
    return Result.ok(await this.collectionService.selectCollectionById(deptId));
  }

  @ApiOperation({ summary: '新增 collection 管理' })
  @ApiResponse({ type: Result<collection> })
  @ApiBody({ type: CreateCollectionDto })
  @RequirePermission('system:collection:add')
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
  @RequirePermission('system:collection:edit')
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
  @RequirePermission('system:collection:remove')
  @Delete('/:ids')
  async delDept(@Param('ids', ParseIntArrayPipe) collectionIds: number[]): Promise<Result<any>> {
    const { count } = await this.collectionService.deleteCollectionByIds(collectionIds);
    return Result.toAjax(count);
  }
}
