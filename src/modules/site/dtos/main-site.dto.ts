import { ApiModelProperty, ApiOperation } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  Length,
  IsIn,
  IsLowercase,
  IsUppercase,
  IsInt,
  Min,
  Max,
  IsPositive,
  IsNumber,
  IsNumberString,
  IsEnum,
  IsIP,
  IsBooleanString,
  IsBoolean,
  IsUrl,
} from 'class-validator';
import { SiteType } from 'common/constants/site_type.enum';

/**
 * 创建DTO
 */
export class CreateSiteDto {
  /**
   * 父站点ID
   */
  // @IsInt()
  // @ApiModelProperty({ description: '父级站点', example: 0 })
  parent_id: number;

  /**
   * 标题
   */
  @IsString()
  @ApiModelProperty({ description: '标题', example: '站点标题' })
  title: string;

  /**
   * 站点目录名
   */
  @IsString()
  @IsLowercase()
  @ApiModelProperty({
    description: '站点目录名',
    example: 'omonjs',
  })
  buildPath: string;

  /**
   * 模板目录名
   */
  @IsString()
  @IsLowercase()
  @ApiModelProperty({
    description: '模板目录名',
    example: 'omon_theme',
  })
  templetPath: string;

  /**
   * 绑定域名
   */
  @IsUrl()
  @ApiModelProperty({
    description: '绑定域名',
    example: 'www.omonjs.com',
  })
  domain: string;

  /**
   * 站点类型
   */
  @IsEnum(SiteType)
  @ApiModelProperty({
    description: '站点类型',
    example: SiteType.PC,
  })
  siteType: SiteType;

  /**
   * 是否默认
   */
  @IsBoolean()
  @ApiModelProperty({
    description: '是否默认',
    example: false,
  })
  isDefault: boolean;
  /**
   * 网站名称
   */
  @IsString()
  @ApiModelProperty({
    description: '网站名称',
    example: '网站的名称',
  })
  name: string;

  /**
   * logo
   */
  @IsString()
  @ApiModelProperty({
    description: 'logo',
    example: 'logo',
  })
  logo: string;

  /**
   * 公司名称
   */
  @IsString()
  @ApiModelProperty({
    description: '公司名称',
    example: 'omno Company',
  })
  company: string;

  /**
   * 通讯地址
   */
  @IsString()
  @ApiModelProperty({
    description: '通讯地址',
    example: 'Company address',
  })
  address: string;

  /**
   * 联系电话
   */
  @IsString()
  @ApiModelProperty({
    description: '联系电话',
    example: '15001088432',
  })
  telephone: string;

  /**
   * 传真
   */
  @IsString()
  @ApiModelProperty({
    description: '联系电话',
    example: '010880432',
  })
  fax: string;

  /**
   * 邮箱
   */
  @IsString()
  @ApiModelProperty({
    description: '邮箱',
    example: 'fan91163@gmail.com',
  })
  email: string;

  /**
   * 备案
   */
  @IsString()
  @ApiModelProperty({
    description: '联系电话',
    example: '京备案字1234567890',
  })
  record: string;

  /**
   * 版权
   */
  @IsString()
  @ApiModelProperty({
    description: '版权',
    example: 'Copyright 2016-2018',
  })
  copyright: string;

  /**
   * SEO标题
   */
  @IsString()
  @ApiModelProperty({
    description: 'SEO标题',
    example: 'SEO_title',
  })
  seoTitle: string;

  /**
   * SEO关健字
   */
  @IsString()
  @ApiModelProperty({
    description: 'SEO关健字',
    example: 'SEOKeyword',
  })
  seoKeyword: string;

  /**
   * SEO描述
   */
  @IsString()
  @ApiModelProperty({
    description: 'SEO描述',
    example: 'SEO_description',
  })
  seoDescription: string;

  /**
   * 排序数字
   */
  @IsNumber()
  @ApiModelProperty({
    description: '排序数字',
    example: 99,
  })
  sortNo: number;

  /**
   *  是否锁定
   */
  @IsBoolean()
  @ApiModelProperty({
    description: '是否锁定',
    example: false,
  })
  isLock: boolean;

  /**
   * 站点所有者Id
   */
  @IsInt()
  @ApiModelProperty({
    description: '站点所有者Id',
    example: 1,
  })
  ownerId: number;
}

/**
 * 更新DTO
 */
export class UpdateSiteDto {
  readonly name: string;
  readonly password: number;
  readonly breed: string;
}

export class getListDto {}
