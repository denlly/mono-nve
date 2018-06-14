import { BaseEntity } from '../../common/entity/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Member extends BaseEntity {

    @Column({
        type: String,
        nullable: false,
        unique: true,
    })
    name: string;



// private int _site_id = 0;
// private int _group_id = 0;
// private string _user_name = string.Empty;
// private string _salt = string.Empty;
// private string _password = string.Empty;
// private string _mobile = string.Empty;
// private string _email = string.Empty;
// private string _avatar = string.Empty;
// private string _nick_name = string.Empty;
// private string _sex = string.Empty;
// private DateTime? _birthday;
// private string _telphone = string.Empty;
// private string _area = string.Empty;
// private string _address = string.Empty;
// private string _qq = string.Empty;
// private string _msn = string.Empty;
// private decimal _amount = 0M;
// private int _point = 0;
// private int _exp = 0;
// private int _status = 0;
// private DateTime _reg_time = DateTime.Now;
// private string _reg_ip = string.Empty;
}