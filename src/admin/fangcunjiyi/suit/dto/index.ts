import { BaseDomain } from "@/common/domain/BaseDomain2";
import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt, IsJSON } from "class-validator";
import { queryDomain } from "@/common/domain/queryDomain";
import { ParseIntPipe, Query } from "@nestjs/common";
import { JsonValue } from "@prisma/client/runtime/library";

/**@description 查询 套装 Dto */
export class QueryTrorderDto extends queryDomain {
  @ApiProperty({ description: "suit表id", required: false })
  @IsOptional()
  @IsInt({ message: "id 必须是 int 数据" })
  id: number | null;

  @ApiProperty({ description: "名称", required: false })
  @IsOptional()
  @IsString({ message: "suit_name 必须是 string 数据" })
  suit_name?: string | null;

  @ApiProperty({ description: "ticketID", required: false })
  @IsOptional()
  @IsInt({ message: "ticketID 必须是 int 数据" })
  ticketID?: number | null;

  @ApiProperty({ description: "创建时间", required: false })
  @IsOptional()
  @IsString({ message: "createTime 必须是 string 数据" })
  createTime: string | null;

  @ApiProperty({ description: "修改时间", required: false })
  @IsOptional()
  @IsString({ message: "updateBy 必须是 string 数据" })
  updateTime: string | null;

  @ApiProperty({ description: "状态。0-正常，1-删除", required: false })
  @IsOptional()
  @IsInt({ message: "status 必须是 int 数据" })
  @Transform(({ value }) => Number(value))
  status: number;
}

/**@description 创建 suit Dto */
export class CreateTrorderDto {
  // @ApiProperty({ description: 'recommendImg表id', required: false })
  // @IsOptional()
  // @IsNumber()
  // id: number | null;

  @ApiProperty({ description: "名称", required: true })
  @IsOptional()
  @IsString()
  suit_name?: string | null;

  @ApiProperty({ description: "套装头图", required: true })
  @IsString()
  header_img?: string | null;

  @ApiProperty({ description: "套装详情图片", required: true })
  @IsString()
  desc_img?: string | null;

  @ApiProperty({ description: "套装对应的邮折", required: false })
  @IsOptional()
  @IsString()
  tickets: string | null;

  @ApiProperty({ description: "说明", required: false })
  @IsOptional()
  @IsString()
  desc: string | null;

  @ApiProperty({ description: "状态。0-正常，1-删除", required: false })
  @IsOptional()
  @IsInt({ message: "status 必须是 int 数据" })
  @Transform(({ value }) => Number(value))
  status: number;
}

/**@description 更新 suit Dto */
export class UpdateTrorderDto {
  @ApiProperty({ description: "recommendImg表id", required: false })
  @IsOptional()
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: "名称", required: true })
  @IsOptional()
  @IsString()
  suit_name?: string | null;

  @ApiProperty({ description: "套装头图", required: true })
  @IsString()
  header_img?: string | null;

  @ApiProperty({ description: "套装详情图片", required: true })
  @IsString()
  desc_img?: string | null;

  @ApiProperty({ description: "套装对应的邮折", required: false })
  @IsOptional()
  // @IsString()
  // @IsJSON()
  tickets: JsonValue | null;

  @ApiProperty({ description: "状态。0-正常，1-删除", required: false })
  @IsOptional()
  @IsInt({ message: "status 必须是 int 数据" })
  @Transform(({ value }) => Number(value))
  status: number;
}
