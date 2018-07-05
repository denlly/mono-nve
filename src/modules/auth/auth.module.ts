import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [MemberModule],
  providers: [AuthService, HttpStrategy],
})
export class AuthModule {}
