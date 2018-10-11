import { ApiModelProperty } from '@nestjs/swagger';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

/**
 * 基础Entity，提供id、createdAt和updatedAt 3个每个表都需要的自动。每个entity都要集成改base entity
 */
export abstract class BaseEntity {
    @ApiModelProperty()
    @PrimaryGeneratedColumn()
    id: number;

    // 逻辑删除标记[0为有效数据，1为无效数据]
    @ApiModelProperty({ type: Number })
    @Column({ type: 'bool', default: false })
    dr: number;

    @ApiModelProperty({ type: Date })
    @CreateDateColumn()
    createdAt: Date;

    @ApiModelProperty({ type: Date })
    @UpdateDateColumn()
    updatedAt: Date;

    /**
     *  是否锁定
     */
    @Column({
        type: 'bool',
        nullable: false,
        default: false,
    })
    isDelete: boolean;
}
