import { BaseEntity } from '../../common/base-class/base.entity';
import { Entity, Column, OneToMany, Timestamp } from 'typeorm';
import { Site } from '../site/site.entity';
import { EALREADY } from 'constants';
import { MemberStatus } from '../../common/constants/member_status';
@Entity('base_member')
export class Member extends BaseEntity {
    /**
     *  账号
     */
    @Column({
        type: String,
        nullable: false,
        unique: true,
        length: 50,
    })
    email: string;

    @Column({
        type: String,
        nullable: true,
        length: 50,
    })
    mobile: string;

    @Column({
        type: String,
        nullable: true,
        length: 200,
    })
    password: string;

    /**
     * 昵称
     */
    @Column({
        type: String,
        nullable: true,
        length: 50,
    })
    niceName: string;

    // @Column({
    //   type: String,
    //   nullable: false,
    //   unique: true,
    // })
    // @OneToMany(type=>Site)
    // sites: Site[];

    // memberGroup: MemberGroup;

    /**
     * salt
     */
    @Column({
        type: String,
        nullable: true,
        length: 10,
    })
    salt: string;

    @Column({
        type: String,
        nullable: true,
        length: 50,
    })
    telphone: string;

    @Column({
        type: String,
        nullable: true,
        length: 50,
    })
    avatar: string;

    @Column({
        type: String,
        nullable: true,
        length: 2,
    })
    gender: string;

    @Column({
        type: Date,
        nullable: true,
    })
    birthday: Date;

    @Column({
        type: String,
        nullable: true,
        length: 100,
    })
    area: string;

    @Column({
        type: String,
        nullable: true,
        length: 100,
    })
    address: string;

    @Column({
        type: String,
        nullable: true,
        length: 20,
    })
    qq: string;

    @Column({
        type: String,
        nullable: true,
        length: 20,
    })
    wx: string;

    /**
     * 余额
     */
    @Column({
        type: String,
        nullable: true,
    })
    amount: string;

    /**
     * 积分
     */
    @Column({
        type: 'int',
        nullable: true,
    })
    point: number;

    /**
     * 经验值
     */
    @Column({
        type: 'int',
        nullable: true,
    })
    experience: number;

    @Column({
        type: String,
        nullable: true,
        length: 20,
    })
    lastLoginIp: string;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    lastLoginAt: Date;

    @Column({
        type: 'int',
        nullable: true,
        default: MemberStatus.UnActive,
    })
    status: MemberStatus;

    @Column({
        type: String,
        nullable: true,
        length: 20,
    })
    registIp: string;
}
