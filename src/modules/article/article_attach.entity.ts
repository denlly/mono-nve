/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article_attach')
export class ArticleAttach extends BaseEntity {

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
        length: 9999,
        nullable: false,
        default: ''
    })
    file_name: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    file_path: string;
    
    /**
        * 
        */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    file_size: number;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: ''
    })
    file_ext: string;

    /**
    * 
    */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    down_num: number;

    /**
    * 
    */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    point: number;    
}