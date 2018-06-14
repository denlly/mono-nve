import { BaseEntity } from '../../common/entity/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('base_member')
export class Member extends BaseEntity {

    /**
     * 父站点ID
     */
    @Column({
        type: 'int',
        nullable: true,
    })
    parent_id: number;

    /**
     * 标题
     */
    @Column({
        length: 100,
        nullable: false,
    })
    title: string;

    /**
     * 站点目录名
     */
    @Column({
        length: 100,
        nullable: false,
    })
    buildPath: string;

    /**
     * 模板目录名
     */
    @Column({
        length: 100,
        nullable: false,
    })
    templetPath: string;

    /**
     * 绑定域名
     */
    @Column({
        length: 100,
        nullable: true,
    })
    domain: string;

    /**
     * 站点类型
     */
    @Column({
        type: 'int',
        nullable: false,
    })
    siteType: SiteType;

    /**
     * 是否默认
     */
    @Column({
        type: 'bool',
        nullable: false,
    })
    isDefault: boolean;
    /**
     * 网站名称
     */
    @Column({
        length: 100,
        nullable: false,
    })
    name: string;

    /**
     * logo
     */
    @Column({
        length: 200,
        nullable: false,
    })
    logo: string;

    /**
     * 公司名称
     */
    @Column({
        length: 50,
        nullable: false,
    })
    company: string;

    /**
     * 通讯地址
     */
    @Column({
        length: 100,
        nullable: true,
    })
    address: string;

    /**
     * 联系电话
     */
    @Column({
        length: 50,
        nullable: true,
    })
    telephone: string;

    /**
     * 传真
     */
    @Column({
        length: 50,
        nullable: true,
    })
    fax: string;

    /**
     * 邮箱
     */
    @Column({
        length: 50,
        nullable: true,
    })
    email: string;

    /**
     * 备案
     */
    @Column({
        length: 50,
        nullable: true,
    })
    record: string;

    /**
     * 版权
     */
    @Column({
        length: 100,
        nullable: true,
    })
    copyright: string;

    /**
     * SEO标题
     */
    @Column({
        length: 500,
        nullable: true,
    })
    seoTitle: string;

    /**
     * SEO关健字
     */
    @Column({
        length: 500,
        nullable: true,
    })
    seoKeyword: string;

    /**
     * SEO描述
     */
    @Column({
        length: 500,
        nullable: true,
    })
    seoDescription: string;

    /**
     * 排序数字
     */
    @Column({
        type: 'int',
        nullable: false,
    })
    sortNo: number;

    /**
     *  是否锁定
     */
    @Column({
        type: 'bool',
        nullable: false,
        default: false,
    })
    isLock: boolean;

    /**
     * 站点所有者Id
     */
    @Column({
        type: 'int',
        nullable: true,
    })
    ownerId: number;
}