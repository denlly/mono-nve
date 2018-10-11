
/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article_tags')
export class ArticleTags extends BaseEntity {

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
        type: 'int',
        nullable: true,
        default: 99,
        description:''
    })
    sort_id: number;
    
}