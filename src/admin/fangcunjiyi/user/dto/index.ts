import { BaseDomain } from '@/common/domain/BaseDomain2';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsInt } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
import { ParseIntPipe, Query } from '@nestjs/common';

/**@description 查询 user Dto */
export class QueryFCUserDto extends queryDomain {
  @ApiProperty({ description: '手机号', required: false })
  @IsOptional()
  @IsString()
  mobile: string | null;

  @ApiProperty({ description: '姓名', required: false })
  @IsOptional()
  @IsString()
  realname?: string | null;

  @ApiProperty({ description: '用户的address', required: false })
  @IsOptional()
  @IsString({ message: 'address 必须是 string 数据' })
  daop_user_address?: string | null;
}

/**@description 创建 user Dto */
export class CreateFCUserDto {
  @ApiProperty({ description: '微信 openid', required: false })
  @IsOptional()
  @IsString()
  wx_mini_openid: string | null;

  @ApiProperty({ description: '微信 unionid', required: false })
  @IsOptional()
  @IsString()
  union_id: string | null;

  @ApiProperty({ description: '手机号', required: false })
  @IsOptional()
  @IsString({ message: '手机号 必须是 大于零的 正整数 数据' })
  mobile: string | null;

  @ApiProperty({ description: '手机号 国家编码', required: false })
  @IsOptional()
  @IsString()
  contry_code: string | null;

  @ApiProperty({ description: '手机号', required: false })
  @IsOptional()
  @IsString({ message: '手机号 必须是 大于零的 正整数 数据' })
  funll_mobile: string | null;

  @ApiProperty({ description: '昵称', required: false })
  @IsOptional()
  @IsString()
  nick_name: string | null;

  @ApiProperty({ description: '用户头像', required: false })
  @IsOptional()
  @IsString()
  avatar: string | null;

  @ApiProperty({ description: '用户个人描述', required: false })
  @IsOptional()
  @IsString()
  description: string | null;

  @ApiProperty({ description: '性别：0-未知；1-男；2-女', required: false })
  @IsOptional()
  @IsNumber()
  gendar: number | null;

  @ApiProperty({ description: '用户类型：1-个人；2-机构', required: false })
  @IsOptional()
  @IsNumber()
  user_type: number | null;

  @ApiProperty({ description: '是否发行机构管理者：1-是；2-否', required: false })
  @IsOptional()
  @IsNumber()
  is_publisher: number | null;

  @ApiProperty({ description: '身份证号码', required: false })
  @IsOptional()
  @IsString()
  id_card_no?: string | null;

  @ApiProperty({ description: '真实姓名', required: false })
  @IsOptional()
  @IsString()
  realname?: string | null;

  @ApiProperty({ description: '实名认证状态：0-待认证；1-审核中；2-通过；3-未通过', required: false })
  @IsOptional()
  @IsNumber()
  realname_state?: number | null;

  @ApiProperty({ description: '实名认证的类型：1-2要素；2-3要素', required: false })
  @IsOptional()
  @IsNumber()
  realname_type?: number | null;

  @ApiProperty({ description: '实名认证通过时间', required: false })
  @IsOptional()
  @IsString()
  realname_time?: string | null;

  @ApiProperty({ description: 'daop账号ID', required: false })
  @IsOptional()
  @IsNumber()
  daop_account_id?: number | null;

  @ApiProperty({ description: 'daop用户ID', required: false })
  @IsOptional()
  @IsNumber()
  daop_user_id?: number | null;

  @ApiProperty({ description: 'daop生成的用户链上地址address', required: false })
  @IsOptional()
  @IsString({ message: 'address 必须是 string 数据' })
  daop_user_address?: string | null;

  @ApiProperty({ description: '用户标签', required: false })
  @IsOptional()
  @IsString()
  tags?: string | null;

  @ApiProperty({ description: '有效状态：1-有效；2-已删除', required: false })
  @IsOptional()
  @IsNumber()
  available_status?: number | null;

  @ApiProperty({ description: '更新时间', required: false })
  @IsOptional()
  @IsString()
  modify_time?: string | null;

  @ApiProperty({ description: '创建时间', required: false })
  @IsString()
  @IsOptional()
  create_time?: string;
}

export class UpdateFCUserDto extends CreateFCUserDto {
  @ApiProperty({ description: 'user表id', required: false })
  @IsOptional()
  @IsNumber()
  id: number | null;
}
