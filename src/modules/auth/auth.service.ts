import { Injectable, BadRequestException } from '@nestjs/common';
import { MemberService } from '../member/member.service';
import * as jwt from 'jsonwebtoken';
import { ErrorCode } from '../../common/constants/error-code';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../member/member.entity';
import { RegisterDto } from './dtos/register.dto';
import { MemberStatus } from '../../common/constants/member_status';
import { BaseService } from '../../common/base-class/base.service';
@Injectable()
export class AuthService extends BaseService<AuthService> {
    private readonly saltRounds = 10;

    constructor(
        @InjectRepository(Member)
        private readonly memberRepository: Repository<Member>,
    ) {
        super('AuthService');
    }

    /**
     * 登录创建Token
     * @param account
     * @param password
     * @param loggedIp
     */
    async createToken(account: string, password: string, loggedIp: string) {
        // [TODO:此处可以通过账户的不同内容进行区分]
        const member = await this.memberRepository.findOne({
            email: account,
        });
        if (!member) {
            throw new BadRequestException(
                ErrorCode.AUTH_MEMBER_NOT_FOUND_ERROR,
            );
        }
        if (!(await this.compareHash(password, member.password))) {
            throw new BadRequestException(
                ErrorCode.AUTH_ACCOUNT_OR_PASSWORD_NOT_RIGHT_ERROR,
            );
        }
        member.lastLoginIp = loggedIp;
        member.lastLoginAt = new Date();
        // [TODO:增加一个登陆日志]
        await this.memberRepository.save(member);
        delete member.password;
        this._logger.log(member);
        this._logger.log(JSON.parse(JSON.stringify(member)));
        // [selt instead of secreKey]
        const result = jwt.sign(
            JSON.parse(JSON.stringify(member)), // If not, throw a error "Expected "payload" to be a plain object"
            'secreKey',
            { expiresIn: 3600 * 4 },
        );
        this._logger.log(result);
        return result;
    }

    /**
     * 注册新用户
     *
     * @param email 邮箱
     * @param password 密码
     * @param language 语言
     * @param [invitationCode] 邀请码
     * @returns User Entity
     */
    async createMember(dto: RegisterDto, signUpIp: string): Promise<Member> {
        // const repositoryManager = manager ? manager : getManager();

        // 如果language没传，默认为英文
        // if (!language || language === '*') {
        //   language = Language.EN;
        // }
        if (!dto.email && !dto.mobile) {
            throw new BadRequestException();
        }
        if (dto.email) {
            const entity = await this.memberRepository.findOne({
                email: dto.email,
            });
            if (entity) {
                throw new BadRequestException(ErrorCode.MEMBER_ALREADY_EXIST);
            }
        }
        if (dto.mobile) {
            const entity = await this.memberRepository.findOne({
                mobile: dto.mobile,
            });
            if (entity) {
                throw new BadRequestException(ErrorCode.MEMBER_ALREADY_EXIST);
            }
        }
        let result;
        if (dto.email) {
            result = await this.memberRepository.save({
                email: dto.email,
                mobile: dto.mobile,
                password: await this.getHash(dto.password),
                registIp: signUpIp,
                status: MemberStatus.UnActive,
            });

            // 删除不想返回给客户端的内容
            delete result.password;
            delete result.activationCode;
            delete result.expiredAt;
            delete result.forgetPasswordToken;
            delete result.forgetPasswordTokenExpiredAt;
        }
        return result;
    }

    async validateUser(member: Member): Promise<any> {
        return await this.memberRepository.findOne({
            account: member.account.toLowerCase(),
        });
    }

    async forgetPassword(email: string): Promise<any> {
        return null;
    }
    /**
     * 对比hash加密字符串
     */
    async compareHash(
        password: string | undefined,
        hash: string | undefined,
    ): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    async getHash(password: string | undefined): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }
}
