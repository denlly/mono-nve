import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMemberDto } from './dtos/main-member.dto';
import { Member } from './member.entity';
import { BaseService } from '../../common/base-class/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService extends BaseService<MemberService> {
  private readonly members: CreateMemberDto[] = [];

  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {
    super('MemberService');
  }

  create(createMemberDto: CreateMemberDto) {
    this.members.push(createMemberDto);
  }

  /**
   * 根据账号找会员
   * @param account
   */
  async findOneByAccount(account: string): Promise<Member> {
    return await this.memberRepository.findOne({ account });
  }

  /**
   *
   * @param account
   * @param selectPassword
   */
  async getMemberByAccount(
    account: string,
    selectPassword: boolean = false,
  ): Promise<Member | undefined> {
    return await this.memberRepository.findOne({
      select: [
        'id',
        'account',
        'password',
        'roles',
        'emailVerified',
        'createdAt',
        'updatedAt',
      ],
      where: {
        account: account.toLowerCase(),
      },
    });
  }
}
