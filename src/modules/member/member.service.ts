import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dtos/main-member.dto';
import { Member } from './member.entity';
import { BaseService } from '../../common/base-class/base.service';

@Injectable()
export class MemberService extends BaseService<MemberService> {
  private readonly members: CreateMemberDto[] = [];

  constructor() {
    super('MemberService');
  }

  create(createMemberDto: CreateMemberDto) {
    this.members.push(createMemberDto);
  }

  async findOneByToken(token: string): Promise<Member> {
    return new Member();
  }
}
