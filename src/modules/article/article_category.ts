/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article_category')
export class ArticleCategory extends BaseEntity {

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    site_id: number;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    channel_id: number;

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
    })
    call_index: string;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    parent_id: number;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    class_list: string;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    class_layer: number;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 99,
        description:''
    })
    sort_id: number;
    
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
    content: string;

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
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_lock: boolean;
}