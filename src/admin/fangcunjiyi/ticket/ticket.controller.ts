import { Controller, Get, Post, ParseIntPipe, Query, Res, Param, Req, Body, Put, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { TicketService } from './service/ticket.service';
import { CreateTicketDto, QueryTicketDto, CreateTicketDto4Golang, SaleStatusDto } from './dto';
import Result from '@/common/result/Result';
import { ticket } from '@/common/prisma-client';
import { RequirePermission } from '@/common/decorator/require-premission.decorator';
import { Response } from 'express';
import { ParseIntArrayPipe } from '@/common/pipe/parse-int-array.pipe';
import { TableDataInfo } from '@/common/domain/TableDataInfo';

@ApiBearerAuth()
@ApiTags('ticket服务')
@Controller('fangcunjiyi/ticket')
export class SysTicketController {
  constructor(private ticketService: TicketService) {}

  @ApiOperation({ summary: '查询ticket信息' })
  @ApiResponse({ type: Result<ticket[]> })
  // @RequirePermission('system:ticket:query')
  @Get('/list')
  async listTicket(@Query() q: QueryTicketDto): Promise<TableDataInfo<ticket>> {
    return Result.TableData(await this.ticketService.selectTicketList(q));
  }

  @ApiOperation({ summary: '查询所有的ticket数据,用于 el-select 使用' })
  @ApiResponse({ type: Result<ticket[]> })
  @Get('/list_select')
  async listAllTickets(): Promise<Result<ticket[]>> {
    return Result.ok(await this.ticketService.selectAllTickets());
  }

  @ApiOperation({ summary: '导出excel数据' })
  // @RequirePermission('system:ticket:export')
  @Get('/export')
  async export(@Res() res: Response): Promise<void> {
    return this.ticketService.exportTicket(res);
  }

  @ApiOperation({ summary: '查询ticket的详细信息' })
  @ApiResponse({ type: Result<ticket> })
  // @RequirePermission('system:ticket:query')
  @Get('/:ticketId')
  async getTicket(@Param('ticketId', ParseIntPipe) ticketId: number): Promise<Result<ticket>> {
    return Result.ok(await this.ticketService.selectTicketById(ticketId));
  }

  // @ApiOperation({ summary: '添加 ticket' })
  // @ApiResponse({ type: Result<ticket> })
  // @ApiBody({ type: CreateTicketDto })
  // @RequirePermission('fangcunjiyi:ticket:add')
  // @Post('/')
  // async addTicket(@Body() ticket: CreateTicketDto, @Req() req): Promise<Result<ticket>> {
  //   ticket = {
  //     ...ticket,
  //   };
  //   return Result.ok(await this.ticketService.addTicket(ticket));
  // }

  @ApiOperation({ summary: '调用后端golang添加ticket(有很多异步和上链的操作)' })
  @ApiResponse({ type: Result<string> })
  @ApiBody({ type: CreateTicketDto4Golang })
  @RequirePermission('fangcunjiyi:ticket:add')
  @Post('/add4Golang')
  async addTicket4Golang(@Body() ticket: CreateTicketDto4Golang, @Req() req): Promise<Result<string>> {
    let data = await this.ticketService.addTicket(ticket);
    if (data.code == 0) {
      return Result.Ok(data.data);
    } else {
      return Result.Error(data.msg);
    }
  }

  @ApiOperation({ summary: '调用后端golang,修改ticket的售卖状态为 发售中' })
  @ApiResponse({ type: Result<string> })
  @ApiBody({ type: SaleStatusDto })
  @RequirePermission('fangcunjiyi:ticket:edit')
  @Post('/saleStatus4Golang')
  async saleStatus4Golang(@Body() sale: SaleStatusDto, @Req() req): Promise<Result<string>> {
    let data = await this.ticketService.saleStatus(sale);
    if (data.code == 0) {
      return Result.Ok(data.data);
    } else {
      return Result.Error(data.msg);
    }
  }

  @ApiOperation({ summary: '更新ticket' })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: CreateTicketDto })
  @RequirePermission('fangcunjiyi:ticket:edit')
  @Put('/')
  async updateTicket(@Body() ticket: CreateTicketDto, @Req() req): Promise<Result<any>> {
    ticket = {
      ...ticket,
    };
    await this.ticketService.updateTicket(ticket);
    return Result.ok('修改成功');
  }

  @ApiOperation({ summary: '删除ticket' })
  @ApiResponse({ type: Result<any> })
  @RequirePermission('fangcunjiyi:ticket:del')
  @Delete('/:ids')
  async delTicket(@Param('ids', ParseIntArrayPipe) ticketIds: number[]): Promise<Result<any>> {
    const { count } = await this.ticketService.deleteTicketByIds(ticketIds);
    return Result.toAjax(count);
  }
}
