import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from '../register.command';

@CommandHandler(RegisterCommand)
export class RegisterHandler implements ICommandHandler<RegisterCommand> {
    constructor() {}

    async execute(command: RegisterCommand, resolve: (value?) => void) {
        resolve();

        const user = command.user;
    }
}
