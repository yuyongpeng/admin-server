import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from "@nestjs/common";
import { ParseIntArrayPipe } from "@/common/pipe/parse-int-array.pipe";
import Result from "@/common/result/Result";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RequirePermission } from "@/common/decorator/require-premission.decorator";
import { nowDateTime } from "@/common/utils";
import { TrorderService } from "./service/trorder.service";
import { QueryTrorderDto, CreateTrorderDto, UpdateTrorderDto } from "./dto/index";
import { Response } from "express";
import { tr_order, resource } from "@/common/prisma-client";
import { TableDataInfo } from "@/common/domain/TableDataInfo";

@ApiBearerAuth()
@ApiTags("订单管理")
@Controller("fangcunjiyi/trorder")
export class TrorderController {
  constructor(private trorderService: TrorderService) {}

  @ApiOperation({ summary: "查询 tr_order 列表" })
  @ApiResponse({ type: TableDataInfo<tr_order> })
  @RequirePermission("system:tr_order:query")
  @Get("/list")
  async listSuit(@Query() q: QueryTrorderDto): Promise<
    TableDataInfo<{
      order_id: number;
      order_no: string;
      ticket_id: number;
      ticket_name: string;
      ticket_coveruri: string;
      collection_id: number;
      collection_name: string;
      seller_uid: number;
      buyer_uid: number;
      buyer_realname: string;
      shared_uid: number;
      price: number;
      amount: number;
      total_price: number;
      pay_channel: string;
      pay_scene: string;
      pay_trade_no: string;
      pay_time: Date;
      pay_status: number;
      transfer_status: number;
      expire_time: Date;
      order_type: number;
      create_time: Date;
    }>
  > {
    return Result.TableData(await this.trorderService.selectTrorderList(q));
  }

  @ApiOperation({ summary: "导出 tr_order xlsx文件" })
  @RequirePermission("system:tr_order:export")
  @Get("/export")
  async export(@Query() q: QueryTrorderDto, @Res() res: Response): Promise<void> {
    return this.trorderService.exportSuit(q, res);
  }

  @ApiOperation({ summary: "查询 tr_order 详细信息" })
  @ApiResponse({ type: Result<tr_order> })
  @RequirePermission("system:tr_order:query")
  @Get("/:id")
  async getSuit(@Param("id", ParseIntPipe) id: number): Promise<Result<tr_order>> {
    return Result.ok(await this.trorderService.selectTrorderById(id));
  }

  // @ApiOperation({ summary: "新增 tr_order " })
  // @ApiResponse({ type: Result<tr_order> })
  // @ApiBody({ type: CreateTrorderDto })
  // @RequirePermission("system:tr_order:add")
  // @Post("/")
  // async addSuit(@Body() tr_order: CreateTrorderDto, @Req() req): Promise<Result<tr_order>> {
  //   tr_order = {
  //     ...tr_order,
  //   };
  //   return Result.ok(await this.trorderService.addTrorder(tr_order));
  // }

  // @ApiOperation({ summary: "修改 tr_order 管理" })
  // @ApiResponse({ type: Result<any> })
  // @ApiBody({ type: UpdateTrorderDto })
  // @RequirePermission("system:tr_order:edit")
  // @Put("/")
  // async updateSuit(@Body() tr_order: UpdateTrorderDto, @Req() req): Promise<Result<any>> {
  //   tr_order = {
  //     ...tr_order,
  //   };
  //   await this.trorderService.updateTrorder(tr_order);
  //   return Result.ok("修改成功！");
  // }

  // @ApiOperation({ summary: "删除 tr_order " })
  // @ApiResponse({ type: Result<any> })
  // @RequirePermission("system:tr_order:remove")
  // @Delete("/:ids")
  // async delSuit(@Param("ids", ParseIntArrayPipe) ids: number[]): Promise<Result<any>> {
  //   const { count } = await this.trorderService.deleteTrorderByIds(ids);
  //   return Result.toAjax(count);
  // }
}
