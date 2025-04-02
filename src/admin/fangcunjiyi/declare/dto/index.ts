import { BaseDomain } from '@/common/domain/BaseDomain2';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { queryDomain } from '@/common/domain/queryDomain';

/**@description 查询部门管理Dto */
export class QueryDeclareDto extends queryDomain {
  @ApiProperty({ description: 'declare表id', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString()
  name: string | null;

  @ApiProperty({ description: '数据类型。1-资源使用声明', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  types: number | null;

  @ApiProperty({ description: '创建时间', required: false })
  @IsOptional()
  @IsString()
  createTime: string | null;

  @ApiProperty({ description: '修改时间', required: false })
  @IsOptional()
  @IsString()
  updateTime: string | null;

  @ApiProperty({ description: '状态。0-正常，1-删除', required: false })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  status: number | null;

  @ApiProperty({ description: '创建者', required: false })
  @IsOptional()
  createBy: string | null;

  @ApiProperty({ description: '更新者', required: false })
  @IsOptional()
  updateBy: string | null;
}

/**@description 创建部门管理Dto */
export class CreateDeclareDto extends BaseDomain {
  @ApiProperty({ description: 'declare表id', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString()
  name: string | null;

  @ApiProperty({ description: '内容', required: false })
  @IsOptional()
  @IsString()
  content: string | null;

  @ApiProperty({ description: '数据类型。1-资源使用声明', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  types: number | null;

  @ApiProperty({ description: '状态。0-正常，1-删除', required: false })
  @IsOptional()
  @IsNumber()
  status: number | null;
}

/**@description 更新部门管理Dto */
export class UpdateDeclareDto extends BaseDomain {
  @ApiProperty({ description: 'declare表id', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  id: number | null;

  @ApiProperty({ description: '名称', required: false })
  @IsOptional()
  @IsString()
  name: string | null;

  @ApiProperty({ description: '内容', required: false })
  @IsOptional()
  @IsString()
  content: string | null;

  @ApiProperty({ description: '数据类型。1-资源使用声明', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  types: number | null;

  @ApiProperty({ description: '状态。0-正常，1-删除', required: false })
  @IsOptional()
  @IsNumber()
  status: number | null;
}
