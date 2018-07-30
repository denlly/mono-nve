import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from '../login.command';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {
    constructor() {}

    async execute(command: LoginCommand, resolve: (value?) => void) {
        console.log('LoginCommand...');

        const user = command.user;

        resolve();
    }
}
