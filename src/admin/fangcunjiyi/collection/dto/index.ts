import { BaseDomain } from '@/common/domain/BaseDomain';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';

/**@description 查询 collection 管理Dto */
export class QueryCollectionDto extends queryDomain {
  @ApiProperty({ description: 'ticket id', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  ticket_id: number | null;

  @ApiProperty({ description: '藏品铸造上链状态：0-待上链；1-已上链；2-上链中；3-上链失败', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  mint_chain_status: number | null;

  @ApiProperty({ description: '藏品销售链上交易ID', required: false })
  @IsOptional()
  @IsString()
  @Type(() => String)
  transfer_tx_id: string | null;

  @ApiProperty({ description: '藏品销售上链状态：0-待上链；1-已上链；2-上链中；3-上链失败', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  transfer_chain_status: number | null;

  @ApiProperty({ description: '销售状态：0-不可售；1-待售；2-发售中；3-已售出；4-已失效；', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  sale_status: number | null;
}

/**@description 创建 collection 管理Dto */
export class CreateCollectionDto {
  @ApiProperty({ description: '藏品名称（可直接用门票名称）' })
  @IsNotEmpty({ message: '藏品名称不能为空' })
  @Type(() => String)
  @IsString()
  collection_name: string;

  @ApiProperty({ description: '门票ID' })
  @IsNotEmpty({ message: '门票ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  ticket_id: number | null;

  @ApiProperty({ description: '对应的门票类型：1-头像；2-图片；3-视频；4-微博；' })
  @IsNotEmpty({ message: '门票类型不能为空' })
  @Type(() => Number)
  @IsNumber()
  ticket_type: number | null;

  @ApiProperty({ description: '上链类型: 1普通2三合一' })
  @IsNotEmpty({ message: '上链类型不能为空' })
  @Type(() => Number)
  @IsNumber()
  chain_type: number | null;

  @ApiProperty({ description: '藏品铸造人用户ID' })
  @IsNotEmpty({ message: '藏品铸造人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  casting_uid: number | null;

  @ApiProperty({ description: '铸造人用户名称（冗余）' })
  @IsNotEmpty({ message: '铸造人用户名称不能为空' })
  @Type(() => String)
  @IsString()
  casting_name: string;

  @ApiProperty({ description: '铸造人在daop平台用户ID（冗余）' })
  @IsNotEmpty({ message: '铸造人在daop平台用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_casting_id: number | null;

  @ApiProperty({ description: '铸造人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '铸造人在daop平台用户地址不能为空' })
  @Type(() => String)
  @IsString()
  daop_casting_address: string;

  @ApiProperty({ description: '持有人用户ID' })
  @IsNotEmpty({ message: '持有人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  owner_uid: number | null;

  @ApiProperty({ description: '持有人用户名称（冗余）' })
  @IsNotEmpty({ message: '持有人用户名称不能为空' })
  @Type(() => String)
  @IsString()
  owner_name: string;

  @ApiProperty({ description: '持有人在daop平台用户ID（冗余）' })
  @IsNotEmpty({ message: '持有人在daop平台用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_user_id: number | null;

  @ApiProperty({ description: '持有人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '持有人在daop平台用户地址不能为空' })
  @Type(() => String)
  @IsString()
  daop_user_address: string;

  @ApiProperty({ description: '授权许可ID（编号）' })
  @IsNotEmpty({ message: '授权许可ID（编号）·不能为空' })
  @Type(() => Number)
  @IsNumber()
  license_id: number | null;

  @ApiProperty({ description: '分享人用户ID' })
  @IsNotEmpty({ message: '分享人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  shared_uid: number | null;

  @ApiProperty({ description: '购买价格（单位：分）' })
  @IsNotEmpty({ message: '购买价格（单位：分）不能为空' })
  @Type(() => Number)
  @IsNumber()
  price: number | null;

  @ApiProperty({ description: '购买时间' })
  @IsNotEmpty({ message: '购买时间不能为空' })
  @Type(() => String)
  @IsString()
  trade_time: string | null;

  @ApiProperty({ description: 'daop藏品id' })
  @IsNotEmpty({ message: 'daop藏品id不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_collection_id: number | null;

  @ApiProperty({ description: '票务系统对应的门票ID' })
  @IsNotEmpty({ message: '票务系统对应的门票ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  out_ticket_id: number | null;

  @ApiProperty({ description: '链上存储的藏品标识（NFT的hashi）' })
  @IsNotEmpty({ message: '链上存储的藏品标识（NFT的hashi）不能为空' })
  @Type(() => String)
  @IsString()
  token_id: string;

  @ApiProperty({ description: '数字藏品的 hash' })
  @IsNotEmpty({ message: '数字藏品的 hash不能为空' })
  @Type(() => String)
  @IsString()
  collection_hash: string;

  @ApiProperty({ description: '持有人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '藏品铸造链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  mint_tx_id: string;

  @ApiProperty({ description: '藏品铸造上链时间' })
  @IsNotEmpty({ message: '藏品铸造上链时间不能为空' })
  @Type(() => String)
  @IsString()
  mint_chain_time: string;

  @ApiProperty({ description: '藏品销售链上交易ID' })
  @IsNotEmpty({ message: '藏品销售链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  transfer_tx_id: string;

  @ApiProperty({ description: '藏品销售上链状态：0-待上链；1-已上链；2-上链中；3-上链失败' })
  @IsNotEmpty({ message: '藏品销售上链状态不能为空' })
  @Type(() => Number)
  @IsNumber()
  transfer_chain_status: number | null;

  @ApiProperty({ description: '藏品销售上链时间' })
  @IsNotEmpty({ message: '藏品销售上链时间不能为空' })
  @Type(() => String)
  @IsString()
  transfer_chain_time: string;

  @ApiProperty({ description: '藏品checkIn链上交易ID' })
  @IsNotEmpty({ message: '藏品checkIn链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  checkeIn_tx_id: string;

  @ApiProperty({ description: '藏品checkIn上链时间' })
  @IsNotEmpty({ message: '藏品checkIn上链时间不能为空' })
  @Type(() => String)
  @IsString()
  checkIn_chain_time: string;

  @ApiProperty({ description: '数字藏品存证uuid' })
  @IsNotEmpty({ message: '数字藏品存证uuid不能为空' })
  @Type(() => String)
  @IsString()
  credential: string;

  @ApiProperty({ description: '数字藏品最后交易存证uuid' })
  @IsNotEmpty({ message: '数字藏品最后交易存证uuid不能为空' })
  @Type(() => String)
  @IsString()
  last_credential: string;

  @ApiProperty({ description: '销售状态：0-不可售；1-待售；2-发售中；3-已售出；4-已失效；' })
  @IsNotEmpty({ message: '销售状态 不能为空' })
  @Type(() => Number)
  @IsNumber()
  sale_status: number | null;

  @ApiProperty({ description: '检票状态：1-待检票；2-已检票' })
  @IsNotEmpty({ message: '检票状态 不能为空' })
  @Type(() => Number)
  @IsNumber()
  available_status: number | null;

  @ApiProperty({ description: '第一次检票时间' })
  @IsNotEmpty({ message: '第一次检票时间不能为空' })
  @Type(() => String)
  @IsString()
  available_time: string;

  @ApiProperty({ description: '检票失效时间' })
  @Type(() => String)
  @IsString()
  available_expire_time: string;

  @ApiProperty({ description: '藏品兑换code' })
  @IsNotEmpty({ message: '藏品兑换code 不能为空' })
  @Type(() => String)
  @IsString()
  check_code: string;

  @ApiProperty({ description: '授权ID' })
  @IsNotEmpty({ message: '授权ID 不能为空' })
  @Type(() => Number)
  @IsNumber()
  authorization_id: number | null;

  @ApiProperty({ description: '版权授权码' })
  @IsNotEmpty({ message: '版权授权码 不能为空' })
  @Type(() => String)
  @IsString()
  authorization_code: string;

  @ApiProperty({ description: '最后更新时间' })
  @IsNotEmpty({ message: '最后更新时间 不能为空' })
  @Type(() => String)
  @IsString()
  modify_time: string;

  @ApiProperty({ description: '创建时间' })
  @IsNotEmpty({ message: '创建时间 不能为空' })
  @Type(() => String)
  @IsString()
  create_time: string;

  @ApiProperty({ description: '上报后返回的状态 0-default; 1-完成上报' })
  @IsNotEmpty({ message: '上报后返回的状态  不能为空' })
  @Type(() => Number)
  @IsNumber()
  dar_status: number | null;

  @ApiProperty({ description: '0-default，使用新规则；1-完成了领取还没有转增的老数据；5-操作完成' })
  @IsNotEmpty({ message: '老规则 不能为空' })
  @Type(() => Number)
  @IsNumber()
  old_status: number | null;

  @ApiProperty({ description: '北数所NFT证书的URL. ' })
  @Type(() => String)
  @IsString()
  certificate_url: string;

  @ApiProperty({ description: '区块号' })
  @IsNotEmpty({ message: '区块号  不能为空' })
  @Type(() => Number)
  @IsNumber()
  block_number: number | null;
}

/**@description 更新 collection 管理Dto */
export class UpdateCollectionDto {
  @ApiProperty({ description: 'collection ID' })
  @IsNotEmpty({ message: 'collection ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: '藏品名称（可直接用门票名称）' })
  @IsNotEmpty({ message: '藏品名称不能为空' })
  @Type(() => String)
  @IsString()
  collection_name: string;

  @ApiProperty({ description: '门票ID' })
  @IsNotEmpty({ message: '门票ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  ticket_id: number | null;

  @ApiProperty({ description: '对应的门票类型：1-头像；2-图片；3-视频；4-微博；' })
  @IsNotEmpty({ message: '门票类型不能为空' })
  @Type(() => Number)
  @IsNumber()
  ticket_type: number | null;

  @ApiProperty({ description: '上链类型: 1普通2三合一' })
  @IsNotEmpty({ message: '上链类型不能为空' })
  @Type(() => Number)
  @IsNumber()
  chain_type: number | null;

  @ApiProperty({ description: '藏品铸造人用户ID' })
  @IsNotEmpty({ message: '藏品铸造人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  casting_uid: number | null;

  @ApiProperty({ description: '铸造人用户名称（冗余）' })
  @IsNotEmpty({ message: '铸造人用户名称不能为空' })
  @Type(() => String)
  @IsString()
  casting_name: string;

  @ApiProperty({ description: '铸造人在daop平台用户ID（冗余）' })
  @IsNotEmpty({ message: '铸造人在daop平台用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_casting_id: number | null;

  @ApiProperty({ description: '铸造人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '铸造人在daop平台用户地址不能为空' })
  @Type(() => String)
  @IsString()
  daop_casting_address: string;

  @ApiProperty({ description: '持有人用户ID' })
  @IsNotEmpty({ message: '持有人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  owner_uid: number | null;

  @ApiProperty({ description: '持有人用户名称（冗余）' })
  @IsNotEmpty({ message: '持有人用户名称不能为空' })
  @Type(() => String)
  @IsString()
  owner_name: string;

  @ApiProperty({ description: '持有人在daop平台用户ID（冗余）' })
  @IsNotEmpty({ message: '持有人在daop平台用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_user_id: number | null;

  @ApiProperty({ description: '持有人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '持有人在daop平台用户地址不能为空' })
  @Type(() => String)
  @IsString()
  daop_user_address: string;

  @ApiProperty({ description: '授权许可ID（编号）' })
  @IsNotEmpty({ message: '授权许可ID（编号）·不能为空' })
  @Type(() => Number)
  @IsNumber()
  license_id: number | null;

  @ApiProperty({ description: '分享人用户ID' })
  @IsNotEmpty({ message: '分享人用户ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  shared_uid: number | null;

  @ApiProperty({ description: '购买价格（单位：分）' })
  @IsNotEmpty({ message: '购买价格（单位：分）不能为空' })
  @Type(() => Number)
  @IsNumber()
  price: number | null;

  @ApiProperty({ description: '购买时间' })
  @IsNotEmpty({ message: '购买时间不能为空' })
  @Type(() => String)
  @IsString()
  trade_time: string | null;

  @ApiProperty({ description: 'daop藏品id' })
  @IsNotEmpty({ message: 'daop藏品id不能为空' })
  @Type(() => Number)
  @IsNumber()
  daop_collection_id: number | null;

  @ApiProperty({ description: '票务系统对应的门票ID' })
  @IsNotEmpty({ message: '票务系统对应的门票ID不能为空' })
  @Type(() => Number)
  @IsNumber()
  out_ticket_id: number | null;

  @ApiProperty({ description: '链上存储的藏品标识（NFT的hashi）' })
  @IsNotEmpty({ message: '链上存储的藏品标识（NFT的hashi）不能为空' })
  @Type(() => String)
  @IsString()
  token_id: string;

  @ApiProperty({ description: '数字藏品的 hash' })
  @IsNotEmpty({ message: '数字藏品的 hash不能为空' })
  @Type(() => String)
  @IsString()
  collection_hash: string;

  @ApiProperty({ description: '持有人在daop平台用户地址（冗余）' })
  @IsNotEmpty({ message: '藏品铸造链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  mint_tx_id: string;

  @ApiProperty({ description: '藏品铸造上链时间' })
  @IsNotEmpty({ message: '藏品铸造上链时间不能为空' })
  @Type(() => String)
  @IsString()
  mint_chain_time: string;

  @ApiProperty({ description: '藏品销售链上交易ID' })
  @IsNotEmpty({ message: '藏品销售链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  transfer_tx_id: string;

  @ApiProperty({ description: '藏品销售上链状态：0-待上链；1-已上链；2-上链中；3-上链失败' })
  @IsNotEmpty({ message: '藏品销售上链状态不能为空' })
  @Type(() => Number)
  @IsNumber()
  transfer_chain_status: number | null;

  @ApiProperty({ description: '藏品销售上链时间' })
  @IsNotEmpty({ message: '藏品销售上链时间不能为空' })
  @Type(() => String)
  @IsString()
  transfer_chain_time: string;

  @ApiProperty({ description: '藏品checkIn链上交易ID' })
  @IsNotEmpty({ message: '藏品checkIn链上交易ID不能为空' })
  @Type(() => String)
  @IsString()
  checkeIn_tx_id: string;

  @ApiProperty({ description: '藏品checkIn上链时间' })
  @IsNotEmpty({ message: '藏品checkIn上链时间不能为空' })
  @Type(() => String)
  @IsString()
  checkIn_chain_time: string;

  @ApiProperty({ description: '数字藏品存证uuid' })
  @IsNotEmpty({ message: '数字藏品存证uuid不能为空' })
  @Type(() => String)
  @IsString()
  credential: string;

  @ApiProperty({ description: '数字藏品最后交易存证uuid' })
  @IsNotEmpty({ message: '数字藏品最后交易存证uuid不能为空' })
  @Type(() => String)
  @IsString()
  last_credential: string;

  @ApiProperty({ description: '销售状态：0-不可售；1-待售；2-发售中；3-已售出；4-已失效；' })
  @IsNotEmpty({ message: '销售状态 不能为空' })
  @Type(() => Number)
  @IsNumber()
  sale_status: number | null;

  @ApiProperty({ description: '检票状态：1-待检票；2-已检票' })
  @IsNotEmpty({ message: '检票状态 不能为空' })
  @Type(() => Number)
  @IsNumber()
  available_status: number | null;

  @ApiProperty({ description: '第一次检票时间' })
  @IsNotEmpty({ message: '第一次检票时间不能为空' })
  @Type(() => String)
  @IsString()
  available_time: string;

  @ApiProperty({ description: '检票失效时间' })
  @Type(() => String)
  @IsString()
  available_expire_time: string;

  @ApiProperty({ description: '藏品兑换code' })
  @IsNotEmpty({ message: '藏品兑换code 不能为空' })
  @Type(() => String)
  @IsString()
  check_code: string;

  @ApiProperty({ description: '授权ID' })
  @IsNotEmpty({ message: '授权ID 不能为空' })
  @Type(() => Number)
  @IsNumber()
  authorization_id: number | null;

  @ApiProperty({ description: '版权授权码' })
  @IsNotEmpty({ message: '版权授权码 不能为空' })
  @Type(() => String)
  @IsString()
  authorization_code: string;

  @ApiProperty({ description: '最后更新时间' })
  @IsNotEmpty({ message: '最后更新时间 不能为空' })
  @Type(() => String)
  @IsString()
  modify_time: string;

  @ApiProperty({ description: '创建时间' })
  @IsNotEmpty({ message: '创建时间 不能为空' })
  @Type(() => String)
  @IsString()
  create_time: string;

  @ApiProperty({ description: '上报后返回的状态 0-default; 1-完成上报' })
  @IsNotEmpty({ message: '上报后返回的状态  不能为空' })
  @Type(() => Number)
  @IsNumber()
  dar_status: number | null;

  @ApiProperty({ description: '0-default，使用新规则；1-完成了领取还没有转增的老数据；5-操作完成' })
  @IsNotEmpty({ message: '老规则 不能为空' })
  @Type(() => Number)
  @IsNumber()
  old_status: number | null;

  @ApiProperty({ description: '北数所NFT证书的URL. ' })
  @Type(() => String)
  @IsString()
  certificate_url: string;

  @ApiProperty({ description: '区块号' })
  @IsNotEmpty({ message: '区块号  不能为空' })
  @Type(() => Number)
  @IsNumber()
  block_number: number | null;
}

export class queryDateDto {
  @ApiProperty({ description: '开始时间' })
  @IsNotEmpty({ message: '开始时间  不能为空' })
  @Type(() => String)
  @IsString()
  start_date?: string;

  @ApiProperty({ description: '结束时间' })
  @IsNotEmpty({ message: '结束时间  不能为空' })
  @Type(() => String)
  @IsString()
  end_date?: string;
}
