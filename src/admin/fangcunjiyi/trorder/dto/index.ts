import { BaseDomain } from "@/common/domain/BaseDomain2";
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt } from "class-validator";
import { queryDomain } from "@/common/domain/queryDomain";
import { ParseIntPipe, Query } from "@nestjs/common";

/**@description 查询 套装 Dto */
export class QueryTrorderDto extends queryDomain {
  @ApiProperty({ description: "方寸记忆订单编号", required: false })
  @IsOptional()
  @IsString({ message: "order_no 必须是 string 数据" })
  order_no: string | null;

  @ApiProperty({ description: "支付通道订单编号", required: false })
  @IsOptional()
  @IsString({ message: "pay_trade_no 必须是 string 数据" })
  pay_trade_no?: string | null;

  @ApiProperty({ description: "支付状态,0-待支付;1-已支付;2-支付失败;3-已过期;4-支付中", required: false })
  @IsOptional()
  @IsInt({ message: "status 必须是 int 数据" })
  @Transform(({ value }) => Number(value)) // 自动的转换为number
  pay_status?: number | null;

  @ApiProperty({ description: "订单类型，0-default；1-证书续费；2-nft购买", required: false })
  @IsOptional()
  @IsInt({ message: "order_type 必须是 int 数据" })
  @Transform(({ value }) => Number(value)) // 自动的转换为number
  order_type?: number | null;

  @ApiProperty({ description: "订单创建时间_start", required: false })
  @IsOptional()
  @IsString({ message: "createTime 必须是 string 数据" })
  createTimeStart?: string | null;

  @ApiProperty({ description: "订单创建时间_end", required: false })
  @IsOptional()
  @IsString({ message: "updateBy 必须是 string 数据" })
  createTimeEnd?: string | null;
}

/**@description 创建 suit Dto */
export class CreateTrorderDto {}

/**@description 更新 suit Dto */
export class UpdateTrorderDto {}
