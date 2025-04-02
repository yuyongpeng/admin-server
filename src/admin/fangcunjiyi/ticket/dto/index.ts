import { BaseDomain } from '@/common/domain/BaseDomain2';
import { queryDomain } from '@/common/domain/queryDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

/**@description 查询 ticket 表的 DTO */
export class QueryTicketDto extends queryDomain {
  @ApiProperty({ description: '门票名称', required: false, example: '一鹿有爱·数字纪念品' })
  @IsOptional()
  ticket_name: string | null;

  @ApiProperty({ description: '门票类型.类型: 1-头像；2-图片；3-视频；4-微博；5-3D', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  ticket_type: number | null;

  @ApiProperty({ description: '售卖状态，销售状态：1-待售；2-发售中；3-已失效；4-已售磬', required: false, isArray: false, type: 'number', minimum: 1, maximum: 10, default: 5, example: 5 })
  @IsOptional()
  @IsNumber()
  // @Type(() => Number)
  @Transform(({ value }) => Number(value))
  sale_status: number | null;

  @ApiProperty({ description: '' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  available_status: number | null;
}

/**@description 创建 ticket 表的 DTO */
export class CreateTicketDto extends BaseDomain {
  id: number;

  @ApiProperty({ description: '门票名称', required: false, example: '一鹿有爱·数字纪念品' })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: '门票名称不能为空' })
  ticket_name: string;

  @ApiProperty({ description: '门票类型.类型: 1-头像；2-图片；3-视频；4-微博；5-3D', required: false })
  @IsOptional()
  @Transform((v) => +v.value)
  @IsNumber()
  @IsNotEmpty({ message: '门票类型不能为空' })
  ticket_type: number | null;

  @ApiProperty({ description: '上链类型: 1普通2三合一', required: false, example: '2' })
  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: '上链类型不能为空' })
  chain_type: number | null;

  @ApiProperty({ description: '门票封面图片', required: false, example: 'https://daop-img.stars-mine.com/image/15/28/15287ffe6fd050c16c8fd4bfd2b0b51196e87020.jpg' })
  @IsOptional()
  @IsString()
  @IsUrl()
  cover_uri: string | null;

  @ApiProperty({ description: '门票内页图片', required: false, example: 'https://www.baidu.com/a.jpg' })
  @IsOptional()
  @IsString()
  @IsUrl()
  content_uri: string | null;

  @ApiProperty({ description: '3D类型藏品素材', required: false, example: '{}' })
  @IsOptional()
  @IsString()
  td_files: string | null;

  @ApiProperty({ description: '创建人用户ID', required: false, example: 12 })
  @IsOptional()
  @IsNumber()
  creator_uid: number | null;

  @ApiProperty({ description: '创建人用户名称（冗余）', required: false, example: '张三' })
  @IsOptional()
  @IsString()
  creator_name: string | null;

  @ApiProperty({ description: '创建人用户头像（冗余）', required: false, example: 'https://daop-img.stars-mine.com/image/15/28/15287ffe6fd050c16c8fd4bfd2b0b51196e87020.jpg' })
  @IsOptional()
  @IsString()
  @IsUrl()
  creator_avatar: string | null;

  @ApiProperty({ description: '创建人在daop平台用户ID（冗余）', required: false, example: 919 })
  @IsOptional()
  @IsNumber()
  daop_user_id: number | null;

  @ApiProperty({ description: '创建人在daop平台用户地址（冗余）', required: false, example: '0x7D9d051428684E2D25358017Ba143F7dd369c560' })
  @IsOptional()
  @IsNumber()
  daop_user_address: string | null;

  @ApiProperty({ description: '发行机构ID', required: false, example: 15 })
  @IsOptional()
  @IsNumber()
  publisher_id: number | null;

  @ApiProperty({ description: '发行人名称（冗余）', required: false, example: '中国集邮有限公司' })
  @IsOptional()
  @IsNumber()
  publisher_name: string | null;

  @ApiProperty({ description: '发行人logo（冗余）', required: false, example: 'https://daop-img.stars-mine.com/image/e5/16/e5165cd4f9bedb3dfc30ddadd60663e5e139593d.png' })
  @IsOptional()
  @IsNumber()
  @IsUrl()
  publisher_logo: string | null;

  @ApiProperty({ description: '可铸造门票数量', required: false, example: 10000 })
  @IsOptional()
  @IsNumber()
  amount: number | null;

  @ApiProperty({ description: '已销售数量', required: false, example: 24 })
  @IsOptional()
  @IsNumber()
  sold_amount: number | null;

  @ApiProperty({ description: '剩余可售数量', required: false, example: 19976 })
  @IsOptional()
  @IsNumber()
  sku_balance: number | null;

  @ApiProperty({ description: '销售价格（单位：分）', required: false, example: 456 })
  @IsOptional()
  @IsNumber()
  price: number | null;

  @ApiProperty({ description: '开始兑现时间', required: false, example: '2024-09-09 09:09:09' })
  @IsOptional()
  @IsString()
  @IsDateString()
  available_time: string | null;

  @ApiProperty({ description: '失效时间', required: false, example: '2024-09-09 09:09:09' })
  @IsOptional()
  @IsString()
  expire_time: string | null;

  @ApiProperty({ description: '开始销售时间', required: false, example: '2024-09-09 09:09:09' })
  @IsOptional()
  @IsString()
  sale_begin_time: string | null;

  @ApiProperty({ description: '结束销售时间', required: false, example: '2024-09-09 09:09:09' })
  @IsOptional()
  @IsString()
  sale_end_time: string | null;

  @ApiProperty({ description: '门票说明', required: false, example: 'https://daop-img.stars-mine.com/image/2f/70/2f70483a2dd9d3b1d1de00c33c533c0147d6c39d.jpg' })
  @IsOptional()
  @IsString()
  @IsUrl()
  description: string | null;

  @ApiProperty({ description: '使用说明', required: false, example: '使用说明' })
  @IsOptional()
  @IsString()
  usage: string | null;

  @ApiProperty({ description: '售卖状态，销售状态：1-待售；2-发售中；3-已失效；4-已售磬', required: false, type: 'number', default: 5, example: 2 })
  @IsOptional()
  @IsNumber()
  sale_status: number | null;

  @ApiProperty({ description: '有效状态：1-有效；2-已删除', required: false, example: 1 })
  @IsNumber()
  available_status: number | null;

  @ApiProperty({ description: '授权ID', required: false, example: 47 })
  @IsOptional()
  @IsNumber()
  authorization_id: number | null;

  @ApiProperty({ description: '版权授权码', required: false, example: 'db18c0dec9bf7342cbbd1664552fb5f4' })
  @IsOptional()
  @IsString()
  authorization_code: string;

  @ApiProperty({ description: '身份声明数据的存证', required: false, example: 'urn:uuid:57261e05-fc0a-442c-9c91-8cb334634afc' })
  @IsOptional()
  @IsString()
  did_credential: string | null;

  @ApiProperty({ description: '版权声明数据的存证', required: false, example: 'urn:uuid:57261e05-fc0a-442c-9c91-8cb334634afc' })
  @IsOptional()
  @IsString()
  copyright_credential: string | null;

  @ApiProperty({ description: '版权授权声明数据的存证', required: false, example: 'urn:uuid:57261e05-fc0a-442c-9c91-8cb334634afc' })
  @IsOptional()
  @IsString()
  authorization_credential: string | null;

  @ApiProperty({ description: '上链产生的链上交易地址', required: false, example: '0x618eb612cd31695ebaf21b96cdd9fc74c9192d36024988aa027131c97157c66a' })
  @IsOptional()
  @IsString()
  chainTxid: string | null;

  @ApiProperty({ description: '上链产生交易在链上的区块号', required: false, example: 12739014 })
  @IsOptional()
  @IsNumber()
  chain_block_number: number | null;

  @ApiProperty({ description: '上链时间', required: false, example: 1728720514 })
  @IsOptional()
  @IsNumber()
  chain_time: number | null;

  @ApiProperty({ description: '上链状态：0-待上链；1-已上链；2-上链中；3-上链失败', required: false, example: 1 })
  @IsOptional()
  @IsNumber()
  chain_status: number | null;

  @ApiProperty({ description: '1不可发售2可售', required: false, example: 2 })
  @IsOptional()
  @IsNumber()
  is_sale: number | null;

  @ApiProperty({ description: '最后更新时间', required: false, example: '2024-10-12 16:07:37' })
  @IsOptional()
  @IsString()
  modify_time: string | null;

  @ApiProperty({ description: '创建时间', required: false, example: '2024-10-12 16:07:37' })
  @IsOptional()
  @IsString()
  create_time: string | null;

  @ApiProperty({ description: '登记id', required: false, example: 45 })
  @IsOptional()
  @IsNumber()
  registration_id: number | null;

  @ApiProperty({ description: '是否开启转增 0-不开启(default)；1-开启转增', required: false, example: 0 })
  @IsOptional()
  @IsNumber()
  end_status: number | null;
}

/**@description 更新 ticket 表的 DTO */
export class UpdateTicketDto extends BaseDomain {}
