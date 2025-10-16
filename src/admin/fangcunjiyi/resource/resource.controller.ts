import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { ResourceService } from './service/resource.service';
import { QueryResourceDto, CreateResourceDto, UpdateResourceDto } from './dto/index';
import { Response } from 'express';
import { resource } from '@/common/prisma-client';
import { TableDataInfo } from '@/common/domain/TableDataInfo';

@ApiBearerAuth()
@ApiTags('部门管理')
@Controller('fangcunjiyi/resource')
export class ResourceController {
  constructor(private resourceService: ResourceService) {}

  @ApiOperation({ summary: '查询 resource 列表' })
  @ApiResponse({ type: TableDataInfo<resource> })
  @RequirePermission('system:resource:query')
  @Get('/list')
  async listDept(@Query() q: QueryResourceDto): Promise<TableDataInfo<resource>> {
    return Result.TableData(await this.resourceService.selectResourceList(q));
  }

  @ApiOperation({ summary: '导出 resource xlsx文件' })
  @RequirePermission('system:resource:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.resourceService.exportDept(res);
  }

  @ApiOperation({ summary: '查询 resource 详细信息' })
  @ApiResponse({ type: Result<resource> })
  @RequirePermission('system:resource:query')
  @Get('/:deptId')
  async getDept(@Param('deptId', ParseIntPipe) deptId: number): Promise<Result<resource>> {
    return Result.ok(await this.resourceService.selectResourceById(deptId));
  }

  @ApiOperation({ summary: '新增 resource' })
  @ApiResponse({ type: Result<resource> })
  @ApiBody({ type: CreateResourceDto })
  @RequirePermission('system:resource:add')
  @Post('/')
  async addDept(@Body() resource: CreateResourceDto, @Req() req): Promise<Result<resource>> {
    resource = {
      ...resource,
      create_time: nowDateTime(),
      update_time: nowDateTime(),
      create_by: req.user?.userName,
      update_by: req.user?.userName,
    };
    return Result.ok(await this.resourceService.addResource(resource));
  }

  @ApiOperation({ summary: '修改 resource 管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateResourceDto })
  @RequirePermission('system:resource:edit')
  @Put('/')
  async updateDept(@Body() resource: UpdateResourceDto, @Req() req): Promise<Result<any>> {
    resource = {
      ...resource,
      update_time: nowDateTime(),
      update_by: req.user?.userName,
    };
    await this.resourceService.updateDept(resource);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 resource ' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:resource:remove')
  @Delete('/:ids')
  async delDept(@Param('ids', ParseIntArrayPipe) deptIds: number[]): Promise<Result<any>> {
    const { count } = await this.resourceService.deleteResourceByIds(deptIds);
    return Result.toAjax(count);
  }

  @ApiOperation({ summary: '苏结通 删除NFT' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:resource:remove')
  @Delete('/sjtHide/:assetNumber')
  async sjtHide(@Param('assetNumber') assetNumber: string): Promise<Result<any>> {
    const ret = await this.resourceService.sjtHide(assetNumber);
    if (ret.success == true) {
      return Result.ok('删除成功');
    } else {
      return Result.Error('删除失败');
    }
  }
}
