import { BaseDomain } from '@/common/domain/BaseDomain2';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
import { ParseIntPipe, Query } from '@nestjs/common';

/**@description 查询 transfer Dto */
export class QueryTransferDto extends queryDomain {
  @ApiProperty({ description: 'transfer表id', required: false })
  @IsOptional()
  @IsInt({ message: 'id 必须是 int 数据' })
  id: number | null;

  @ApiProperty({ description: 'collection id', required: false })
  @IsOptional()
  @IsInt({ message: 'collection id 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  collection_id?: number | null;

  @ApiProperty({ description: 'token id', required: false })
  @IsOptional()
  @IsString({ message: 'token id 必须是 string 数据' })
  token_id?: string | null;

  @ApiProperty({ description: '接收入手机号', required: false })
  @IsOptional()
  @IsString({ message: '接收入手机号 必须是 string 数据' })
  receiver_mobile?: string | null;

  @ApiProperty({ description: '上链 交易 ID', required: false })
  @IsOptional()
  @IsString({ message: 'tx_id 必须是 string 数据' })
  tx_id?: string | null;

  @ApiProperty({ description: '上链状态', required: false })
  @IsOptional()
  @IsInt({ message: 'chain_status 必须是 int 数据' })
  chain_status?: number | null;

  @ApiProperty({ description: '交易类型', required: false })
  @IsOptional()
  @IsString({ message: '交易类型 必须是 int 数据' })
  transfer_type: number | null;
}

/**@description 创建 transfer Dto */
export class CreateTransferDto extends BaseDomain {
  // @ApiProperty({ description: 'collection表id', required: false })
  // @IsOptional()
  // @IsNumber()
  // id: number | null;

  @ApiProperty({ description: 'collection id', required: false })
  @IsOptional()
  @IsInt({ message: 'collection_id 必须是int类型数据' })
  @Transform(({ value }) => Number(value))
  collection_id: number | null;

  @ApiProperty({ description: '数字藏品存证uuid(冗余)', required: false })
  @IsOptional()
  @IsString({ message: 'collection_credential 必须是string类型数据' })
  collection_credential?: string | null;

  @ApiProperty({ description: '数字藏品最后交易存证uuid（冗余字段）', required: false })
  @IsOptional()
  @IsString()
  collection_last_credential?: string | null;

  @ApiProperty({ description: 'token id', required: false })
  @IsOptional()
  @IsNumber()
  token_id: string | null;

  @ApiProperty({ description: '订单号 针对销售交易', required: false })
  @IsOptional()
  @IsNumber()
  order_id: number | null;

  @ApiProperty({ description: '转出人用户id', required: false })
  @IsOptional()
  @IsNumber()
  transfer_uid: number | null;

  @ApiProperty({ description: '转出人姓名', required: false })
  @IsOptional()
  @IsString()
  transfer_name: string | null;

  @ApiProperty({ description: '接收人用户id', required: false })
  @IsOptional()
  @IsNumber()
  receiver_uid: number | null;

  @ApiProperty({ description: '接收人姓名', required: false })
  @IsOptional()
  @IsString()
  receiver_name: string | null;

  @ApiProperty({ description: '接收人手机号', required: false })
  @IsOptional()
  @IsString()
  receiver_mobile: string | null;

  @ApiProperty({ description: '上链交易ID', required: false })
  @IsOptional()
  @IsString()
  tx_id: string | null;

  @ApiProperty({ description: '上链状态：0-待上链；1-已上链；2-上链中；3-上链失败', required: false })
  @IsOptional()
  @IsInt({ message: 'chain_status 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  chain_status: number;

  @ApiProperty({ description: '上链时间', required: false })
  @IsOptional()
  @IsString()
  chain_time: string | null;

  @ApiProperty({ description: '交易类型：1-销售；2-转赠；3-空投；4-回收(订单过期)；5-回购', required: false })
  @IsOptional()
  @IsNumber()
  transfer_type: number | null;

  @ApiProperty({ description: '最后修改时间', required: false })
  @IsOptional()
  @IsString()
  modify_time: string | null;

  @ApiProperty({ description: '创建时间', required: false })
  @IsOptional()
  @IsString()
  create_time: string | null;

  @ApiProperty({ description: '区块号', required: false })
  @IsOptional()
  @IsNumber()
  block_number: number | null;
}

/**@description 更新 transfer Dto */
export class UpdateTransferDto extends BaseDomain {
  @ApiProperty({ description: 'transfer表id', required: false })
  @IsOptional()
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: 'collection id', required: false })
  @IsOptional()
  @IsInt({ message: 'collection_id 必须是int类型数据' })
  @Transform(({ value }) => Number(value))
  collection_id: number | null;

  @ApiProperty({ description: '数字藏品存证uuid(冗余)', required: false })
  @IsOptional()
  @IsString({ message: 'collection_credential 必须是string类型数据' })
  collection_credential?: string | null;

  @ApiProperty({ description: '数字藏品最后交易存证uuid（冗余字段）', required: false })
  @IsOptional()
  @IsString()
  collection_last_credential?: string | null;

  @ApiProperty({ description: 'token id', required: false })
  @IsOptional()
  @IsNumber()
  token_id: string | null;

  @ApiProperty({ description: '订单号 针对销售交易', required: false })
  @IsOptional()
  @IsNumber()
  order_id: number | null;

  @ApiProperty({ description: '转出人用户id', required: false })
  @IsOptional()
  @IsNumber()
  transfer_uid: number | null;

  @ApiProperty({ description: '转出人姓名', required: false })
  @IsOptional()
  @IsString()
  transfer_name: string | null;

  @ApiProperty({ description: '接收人用户id', required: false })
  @IsOptional()
  @IsNumber()
  receiver_uid: number | null;

  @ApiProperty({ description: '接收人姓名', required: false })
  @IsOptional()
  @IsString()
  receiver_name: string | null;

  @ApiProperty({ description: '接收人手机号', required: false })
  @IsOptional()
  @IsString()
  receiver_mobile: string | null;

  @ApiProperty({ description: '上链交易ID', required: false })
  @IsOptional()
  @IsString()
  tx_id: string | null;

  @ApiProperty({ description: '上链状态：0-待上链；1-已上链；2-上链中；3-上链失败', required: false })
  @IsOptional()
  @IsInt({ message: 'chain_status 必须是 int 数据' })
  @Transform(({ value }) => Number(value))
  chain_status: number;

  @ApiProperty({ description: '上链时间', required: false })
  @IsOptional()
  @IsString()
  chain_time: string | null;

  @ApiProperty({ description: '交易类型：1-销售；2-转赠；3-空投；4-回收(订单过期)；5-回购', required: false })
  @IsOptional()
  @IsNumber()
  transfer_type: number | null;

  @ApiProperty({ description: '最后修改时间', required: false })
  @IsOptional()
  @IsString()
  modify_time: string | null;

  @ApiProperty({ description: '创建时间', required: false })
  @IsOptional()
  @IsString()
  create_time: string | null;

  @ApiProperty({ description: '区块号', required: false })
  @IsOptional()
  @IsNumber()
  block_number: number | null;
}
