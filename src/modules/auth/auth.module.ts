import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
  forwardRef,
} from '@nestjs/common';
// import { JwtStrategy } from './jwt.strategy';
import * as passport from 'passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { MemberModule } from '../member/member.module';
import { Member } from '../member/member.entity';
import { CQRSModule, CommandBus } from '@nestjs/cqrs';
import { ModuleRef } from '@nestjs/core';
import { CommandHandlers } from './commands/handlers';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  components: [AuthService],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
//  {
//   constructor()

//   // onModuleInit() {
//   //   this.command$.setModuleRef(this.moduleRef);
//   //   this.command$.register(CommandHandlers);
//   // }
//   // public configure(consumer: MiddlewareConsumer) {
//   //   consumer
//   //     .apply(passport.authenticate('jwt', { session: false }))
//   //     .forRoutes({ url: '/member', mothod: RequestMethod.ALL });
//   // }
// }
