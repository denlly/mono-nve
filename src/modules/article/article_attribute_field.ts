// private int  id;
// private string  name;
// private string  title = string.Empty;
// private string  control_type;
// private string  data_type;
// private int  data_length = 0;
// private int  data_place = 0;
// private string  item_option = string.Empty;
// private string  default_value = string.Empty;
// private int  is_required = 0;
// private int  is_password = 0;
// private int  is_html = 0;
// private int  editor_type = 0;
// private string  valid_tip_msg = string.Empty;
// private string  valid_error_msg = string.Empty;
// private string  valid_pattern = string.Empty;
// private int  sort_id = 99;
// private int  is_sys = 0;
// private int  is_lock = 0;

/**
 * author: fan xiaodong<fan91163@gmail.com>
 * createdBy: 2018/4/8
 * status: pending
 * statusDescription: 需要string类型字段的默认值
 */
import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column } from 'typeorm';
import { SiteType } from '../../common/constants/site_type.enum';

@Entity('article_attribute_field')
export class ArticleAttributeField extends BaseEntity {

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    name: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default:''
    })
    title: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    control_type: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
    })
    data_type: string;

    /**
    * 
    */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    data_length: number;

    /**
    * 
    */
    @Column({
        type: 'int',
        nullable: true,
        default: 0,
        description: ''
    })
    data_place: number;
    
    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default:'',
    })
    item_option: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: '',
    })
    default_value: string;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_required: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_password: boolean;

    /**
     * 
     */
    @Column({
        type: 'boolean',
        nullable: true,
        default: false,
        description: ''
    })
    is_html: boolean;

    /**
     * 
     */
    @Column({
        type: 'int',
        nullable: true,
        default: 99,
        description: ''
    })
    editor_type: number;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: '',
    })
    valid_tip_msg: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: '',
    })
    valid_error_msg: string;

    /**
     * 
     */
    @Column({
        length: 9999,
        nullable: false,
        default: '',
    })
    valid_pattern: string;

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
    is_lock: boolean;

}