import { BaseDomain } from '@/common/domain/BaseDomain2';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
import { ParseIntPipe, Query } from '@nestjs/common';

/**@description 查询 resource Dto */
export class QueryResourceDto extends queryDomain {
  @ApiProperty({ description: 'resource表id', required: false })
  @IsOptional()
  @IsInt({ message: 'id 必须是 int 数据' })
  id: number | null;

  @ApiProperty({ description: 'ticket id', required: false })
  @IsOptional()
  @IsInt({ message: 'ticket id 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  ticket_id?: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString({ message: 'name 必须是 string 数据' })
  name?: string | null;

  @ApiProperty({ description: '资源的URL', required: false })
  @IsOptional()
  @IsString({ message: 'resource_url 必须是 string 数据' })
  resource_url?: string | null;

  @ApiProperty({ description: '排序', required: false })
  @IsOptional()
  @IsString({ message: 'remark 必须是 string 数据' })
  remark?: string | null;

  @ApiProperty({ description: '备注', required: false })
  @IsOptional()
  @IsInt({ message: 'order 必须是 int 数据' })
  order?: number | null;

  @ApiProperty({ description: '创建时间', required: false })
  @IsOptional()
  @IsString({ message: 'createTime 必须是 string 数据' })
  createTime: string | null;

  @ApiProperty({ description: '修改时间', required: false })
  @IsOptional()
  @IsString({ message: 'updateTime 必须是 string 数据' })
  updateTime: string | null;

  @ApiProperty({ description: '状态。0-正常，1-删除', required: false })
  @IsOptional()
  @IsInt({ message: 'status 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  status: number;

  @ApiProperty({ description: '创建者', required: false })
  @IsOptional()
  @IsString({ message: 'createBy 必须是 string 数据' })
  createBy: string | null;

  @ApiProperty({ description: '更新者', required: false })
  @IsOptional()
  @IsString({ message: 'updateBy 必须是 string 数据' })
  updateBy: string | null;
}

/**@description 创建 resource Dto */
export class CreateResourceDto extends BaseDomain {
  // @ApiProperty({ description: 'resource表id', required: false })
  // @IsOptional()
  // @IsNumber()
  // id: number | null;

  @ApiProperty({ description: 'ticket id', required: false })
  @IsOptional()
  @IsInt({ message: 'ticket_id 必须是int类型数据' })
  @Transform(({ value }) => Number(value))
  ticket_id: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString()
  name?: string | null;

  @ApiProperty({ description: '资源的URL', required: false })
  @IsOptional()
  @IsString()
  resource_url?: string | null;

  @ApiProperty({ description: 'order 排序', required: false })
  @IsOptional()
  @IsNumber()
  order: number | null;

  @ApiProperty({ description: '状态。0-正常，1-删除', required: false })
  @IsOptional()
  @IsInt({ message: 'status 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  status: number;
}

/**@description 更新 resource Dto */
export class UpdateResourceDto extends BaseDomain {
  @ApiProperty({ description: 'resource表id', required: false })
  @IsOptional()
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: 'ticket id', required: false })
  @IsOptional()
  @IsInt({ message: 'ticket_id 必须是int类型数据' })
  @Transform(({ value }) => Number(value))
  ticket_id?: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString()
  name?: string | null;

  @ApiProperty({ description: '资源的URL', required: false })
  @IsOptional()
  @IsString()
  resource_url?: string | null;

  @ApiProperty({ description: 'order 排序', required: false })
  @IsOptional()
  @IsNumber()
  order: number | null;

  @ApiProperty({ description: '状态 0-正常，1-删除', required: false })
  @IsOptional()
  @IsNumber()
  status: number | null;
}
