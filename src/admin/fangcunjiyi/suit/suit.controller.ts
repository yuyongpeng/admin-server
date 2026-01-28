import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req, Res } from "@nestjs/common";
import { ParseIntArrayPipe } from "@/common/pipe/parse-int-array.pipe";
import Result from "@/common/result/Result";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RequirePermission } from "@/common/decorator/require-premission.decorator";
import { nowDateTime } from "@/common/utils";
import { SuitService } from "./service/suit.service";
import { QueryTrorderDto, CreateTrorderDto, UpdateTrorderDto } from "./dto/index";
import { Response } from "express";
import { suit, resource } from "@/common/prisma-client";
import { TableDataInfo } from "@/common/domain/TableDataInfo";

@ApiBearerAuth()
@ApiTags("套装管理")
@Controller("fangcunjiyi/suit")
export class SuitController {
  constructor(private suitService: SuitService) {}

  @ApiOperation({ summary: "查询 suit 列表" })
  @ApiResponse({ type: TableDataInfo<suit> })
  @RequirePermission("system:suit:query")
  @Get("/list")
  async listSuit(@Query() q: QueryTrorderDto): Promise<TableDataInfo<suit>> {
    return Result.TableData(await this.suitService.selectSuitList(q));
  }

  @ApiOperation({ summary: "导出 suit xlsx文件" })
  @RequirePermission("system:suit:export")
  @Get("/export")
  async export(@Res() res: Response): Promise<void> {
    return this.suitService.exportSuit(res);
  }

  @ApiOperation({ summary: "查询 suit 详细信息" })
  @ApiResponse({ type: Result<suit> })
  @RequirePermission("system:suit:query")
  @Get("/:id")
  async getSuit(@Param("id", ParseIntPipe) id: number): Promise<Result<suit>> {
    return Result.ok(await this.suitService.selectSuitById(id));
  }

  @ApiOperation({ summary: "新增 suit " })
  @ApiResponse({ type: Result<suit> })
  @ApiBody({ type: CreateTrorderDto })
  @RequirePermission("system:suit:add")
  @Post("/")
  async addSuit(@Body() suit: CreateTrorderDto, @Req() req): Promise<Result<suit>> {
    suit = {
      ...suit,
    };
    return Result.ok(await this.suitService.addSuit(suit));
  }

  @ApiOperation({ summary: "修改 suit 管理" })
  @ApiResponse({ type: Result<any> })
  @ApiBody({ type: UpdateTrorderDto })
  @RequirePermission("system:suit:edit")
  @Put("/")
  async updateSuit(@Body() suit: UpdateTrorderDto, @Req() req): Promise<Result<any>> {
    suit = {
      ...suit,
    };
    await this.suitService.updateSuit(suit);
    return Result.ok("修改成功！");
  }

  @ApiOperation({ summary: "删除 suit " })
  @ApiResponse({ type: Result<any> })
  @RequirePermission("system:suit:remove")
  @Delete("/:ids")
  async delSuit(@Param("ids", ParseIntArrayPipe) ids: number[]): Promise<Result<any>> {
    const { count } = await this.suitService.deleteSuitByIds(ids);
    return Result.toAjax(count);
  }
}
