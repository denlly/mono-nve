/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article')
export class Article extends BaseEntity {

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default:0,
        description:''
    })
    channel_id: number;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    category_id: number;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    call_index: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    title: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    link_url: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    img_url: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    seo_title: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    seo_keywords: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    seo_description: string; 

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    tags: string; 


    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    zhaiyao: string; 

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    content: string;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 99,
        description: ''
    })
    sort_id: number;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    click: number;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    status: number;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_msg: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_top: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_red: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_hot: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_slide: boolean; 

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_sys: boolean; 

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    like_count: boolean; 
    
    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    user_name: string; 
}