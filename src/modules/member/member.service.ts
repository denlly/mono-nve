import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dtos/main-member.dto';

@Injectable()
export class MemberService {
  private readonly members: CreateMemberDto[] = [];

  create(createMemberDto: CreateMemberDto) {
    this.members.push(createMemberDto);
  }

}