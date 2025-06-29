import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from '@nestjs/common';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import Result from '@/common/result/Result';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { nowDateTime } from '@/common/utils';
import { FCUserService } from './service/user.service';
import { QueryFCUserDto, CreateFCUserDto, UpdateFCUserDto } from './dto/index';
import { Response } from 'express';
import { user } from '@/common/prisma-client';
import { TableDataInfo } from '@/common/domain/TableDataInfo';

@ApiBearerAuth()
@ApiTags('User 管理')
@Controller('fangcunjiyi/user')
export class FCUserController {
  constructor(private userService: FCUserService) {}

  @ApiOperation({ summary: '查询 user 列表' })
  @ApiResponse({ type: TableDataInfo<user> })
  @RequirePermission('fangcunjiyi:user:query')
  @Get('/list')
  async listDept(@Query() q: QueryFCUserDto): Promise<TableDataInfo<user>> {
    return Result.TableData(await this.userService.selectResourceList(q));
  }

  @ApiOperation({ summary: '导出 user xlsx文件' })
  @RequirePermission('fangcunjiyi:user:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.userService.exportUser(res);
  }

  @ApiOperation({ summary: '查询 user 详细信息' })
  @ApiResponse({ type: Result<user> })
  @RequirePermission('fangcunjiyi:user:query')
  @Get('/:userId')
  async getUser(@Param('userId', ParseIntPipe) userId: number): Promise<Result<user>> {
    return Result.ok(await this.userService.selectUserById(userId));
  }

  @ApiOperation({ summary: '新增 user ' })
  @ApiResponse({ type: Result<user> })
  @ApiBody({ type: CreateFCUserDto })
  @RequirePermission('fangcunjiyi:user:add')
  @Post('/')
  async addUser(@Body() user: CreateFCUserDto, @Req() req): Promise<Result<user>> {
    user = {
      ...user,
      create_time: nowDateTime(),
      modify_time: nowDateTime(),
    };
    return Result.ok(await this.userService.addUser(user));
  }

  @ApiOperation({ summary: '修改 user 管理' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateFCUserDto })
  @RequirePermission('system:user:edit')
  @Put('/')
  async updateDept(@Body() user: UpdateFCUserDto, @Req() req): Promise<Result<any>> {
    user = {
      ...user,
      modify_time: nowDateTime(),
    };
    await this.userService.updateUser(user);
    return Result.ok('修改成功！');
  }

  @ApiOperation({ summary: '删除 user' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('system:user:remove')
  @Delete('/:ids')
  async delUser(@Param('ids', ParseIntArrayPipe) userIds: number[]): Promise<Result<any>> {
    const { count } = await this.userService.deleteUserByIds(userIds);
    return Result.toAjax(count);
  }
}
