import { Injectable } from '@nestjs/common';
import { MemberService } from '../member/member.service';

@Injectable()
export class AuthService {
  constructor(private readonly memberService: MemberService) {}

  async validateUser(token: string): Promise<any> {
    return await this.memberService.findOneByToken(token);
  }
}
