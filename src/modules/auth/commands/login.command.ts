import { User } from '../../user/user.entity';
import { ICommand } from '@nestjs/cqrs';

/**
 * 登陆成功事件
 */
export class LoginCommand implements ICommand {
    constructor(public readonly user: User) {}
}
