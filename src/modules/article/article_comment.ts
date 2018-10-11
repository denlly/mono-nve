﻿/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article_comment')
export class ArticleComment extends BaseEntity {

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
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    article_id: number;

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
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    user_id: number;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default:'',
    })
    user_name: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    user_ip: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    content: string;

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

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_reply: boolean;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default:'',
    })
    reply_content: string;


    @Column({
        type:'timestamp',
        nullable: true,
    })
    reply_time: Date;

}
