import { User } from '../../user/user.entity';
import { ICommand } from '@nestjs/cqrs';

import { EntityManager } from 'typeorm';

/**
 * 注册成功事件
 */
export class RegisterCommand implements ICommand {
    constructor(public readonly user: User, public readonly manager?: EntityManager) {}
}
