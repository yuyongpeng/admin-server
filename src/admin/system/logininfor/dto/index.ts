import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';
/**@description 查询登录日志Dto */
export class QuerySysLogininforDto extends queryDomain {
  @ApiProperty({ description: '用户账号',required:false })
  @IsOptional()
  userName: string | null;
  @ApiProperty({ description: '登录IP地址',required:false })
  @IsOptional()
  ipaddr: string | null;
  @ApiProperty({ description: '登录地点',required:false })
  @IsOptional()
  loginLocation: string | null;
  @ApiProperty({ description: '浏览器类型',required:false })
  @IsOptional()
  browser: string | null;
  @ApiProperty({ description: '操作系统',required:false })
  @IsOptional()
  os: string | null;
  @ApiProperty({ description: '登录状态（0失败,1成功）',required:false })
  @IsOptional()
  status: string | null;
  @ApiProperty({ description: '提示消息',required:false })
  @IsOptional()
  msg: string | null;
  @ApiProperty({ description: '登录时间排序 descending|ascending',required:false })
  @IsOptional()
  isAsc: string | null;
}
/**@description 创建登录日志Dto */
export class CreateSysLogininforDto {
  @ApiProperty({ description: '用户账号',required:false })
  @IsOptional()
  @IsString()
  userName?: string;
  @ApiProperty({ description: '登录IP地址',required:false })
  @IsOptional()
  @IsString()
  ipaddr?: string;
  @ApiProperty({ description: '登录地点',required:false })
  @IsOptional()
  @IsString()
  loginLocation?: string;
  @ApiProperty({ description: '浏览器类型',required:false })
  @IsOptional()
  @IsString()
  browser?: string;
  @ApiProperty({ description: '操作系统',required:false })
  @IsOptional()
  @IsString()
  os?: string;
  @ApiProperty({ description: '登录状态（0失败,1成功）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '提示消息',required:false })
  @IsOptional()
  @IsString()
  msg?: string;
  @ApiProperty({ description: '访问时间',required:false })
  @IsOptional()
  @IsString()
  loginTime?: string;
}
/**@description 更新登录日志Dto */
export class UpdateSysLogininforDto {
  @ApiProperty({ description: '访问ID' })
  @IsNotEmpty({ message: '访问ID不能为空' })
  @Transform((v) => +v.value)
  @IsNumber()
  infoId: number;
  @ApiProperty({ description: '用户账号',required:false })
  @IsOptional()
  @IsString()
  userName?: string;
  @ApiProperty({ description: '登录IP地址',required:false })
  @IsOptional()
  @IsString()
  ipaddr?: string;
  @ApiProperty({ description: '登录地点',required:false })
  @IsOptional()
  @IsString()
  loginLocation?: string;
  @ApiProperty({ description: '浏览器类型',required:false })
  @IsOptional()
  @IsString()
  browser?: string;
  @ApiProperty({ description: '操作系统',required:false })
  @IsOptional()
  @IsString()
  os?: string;
  @ApiProperty({ description: '登录状态（0失败,1成功）',required:false })
  @IsOptional()
  @IsString()
  status?: string;
  @ApiProperty({ description: '提示消息',required:false })
  @IsOptional()
  @IsString()
  msg?: string;
  @ApiProperty({ description: '访问时间',required:false })
  @IsOptional()
  @IsString()
  loginTime?: string;
}
