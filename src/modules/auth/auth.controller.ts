import {
    BadRequestException,
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Put,
    Param,
    Request,
    Response,
    Logger,
    Get,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ErrorCode } from '../../common/constants/error-code';
import { LoginDto } from './dtos/login.dto';
// import * as moment from 'moment';
const moment = require('moment');
import { AuthService } from './auth.service';
import { Member } from '../member/member.entity';
import { MemberService } from '../member/member.service';
import { RedisService } from '../redis/redis.service';
import { RegisterDto } from './dtos/register.dto';
import { ForgetPasswordDto } from './dtos/forget-password.dto';
import { Response as ExpressResponse } from 'express';
import { ResetPasswordDto } from './dtos/reset-password.dto';
import { BaseController } from '../../common/base-class/base.controller';

@Controller('auth')
@ApiUseTags('auth')
export class AuthController extends BaseController<AuthController> {
    constructor(private readonly authService: AuthService) {
        super('AuthController');
    }

    /**
     * 登录
     */
    @ApiOperation({ title: '登陆成功后返回access token' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: Object,
        description: '成功返回access token',
    })
    @ApiResponse({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        type: Object,
        description: '参数验证失败',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        type: Object,
        description: `
		${ErrorCode.MEMBER_NOT_EXIST} 用户不存在
		${ErrorCode.AUTH_MEMBER_PASSWORD_INCORRECT} 用户存在，但是密码错误
		${ErrorCode.MEMBER_UNACTIVATED_ERROR} 用户未激活，需要激活
	`,
    })
    @Post('login')
    public async login(
        @Body() dto: LoginDto,
        @Request() req,
        @Response() res: ExpressResponse,
    ) {
        this._logger.log(dto);
        const loggedIp = req.ip;
        const result = await this.authService.createToken(
            dto.account,
            dto.password,
            loggedIp,
        );
        return res
            .cookie('token', result.token, {
                // 返回一个token cookie，给nuxt做ssr判断用户登陆状态用
                expires: moment()
                    .add(1, 'h')
                    .toDate(),
            })
            .status(HttpStatus.OK)
            .json(result);
    }

    /**
     * 退出登录
     */
    @ApiOperation({ title: '退出登录' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: Object,
        description: '成功返回access token',
    })
    public async logout() {
        // 【TODO:完善】
        return {};
    }
    /**
     * 用户注册
     * @param dto 注册dto
     * @param req
     */
    @ApiOperation({ title: '注册新用户' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: Member,
        description: '成功返回Member Entity',
    })
    @ApiResponse({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        type: Object,
        description: '参数验证失败',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        type: Object,
        description: `
		${ErrorCode.MEMBER_ALREADY_EXIST} 用户已存在
	`,
    })
    @Post('register')
    public async register(@Body() dto: RegisterDto, @Request() req) {
        const signUpIp = req.ip;
        return await this.authService.createMember(dto, signUpIp, null);
    }

    /**
     * 以邮件形式找回忘记的密码
     * @param dto
     */
    @ApiOperation({ title: '发送忘记密码邮件' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: Object,
        description: '成功返回User Entity',
    })
    @ApiResponse({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        type: Object,
        description: '参数验证失败',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        type: Object,
        description: `message错误类型
				${ErrorCode.MEMBER_UNACTIVATED_ERROR} 用户未激活，需要激活
				${
                    ErrorCode.AUTH_MEMBER_SEND_FORGET_PASSWORD_TOKEN_LIMIT_ERROR
                } 发送找回密码邮件超过当天允许次数
			`,
    })
    @HttpCode(HttpStatus.OK)
    @Post('forget_password')
    public async forgetPassword(@Body() dto: ForgetPasswordDto) {
        // if (
        //     !(await this.authService.isHuman(
        //         signUpIp,
        //         dto.google_recaptcha,
        //         dto.geetest_challenge,
        //         dto.geetest_validate,
        //         dto.geetest_seccode,
        //     ))
        // ) {
        //     throw new BadRequestException(ErrorCode.USER_RECAPTCHA_VALIDATE_ERROR);
        // }
        return await this.authService.forgetPassword(dto.email);
    }

    /**
     * 通过忘记密码token修改密码
     * @param dto
     */
    @ApiOperation({ title: '通过忘记密码token修改密码' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: Object,
        description: '成功返回User Entity',
    })
    @ApiResponse({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        type: Object,
        description: '参数验证失败',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        type: Object,
        description: `
		${ErrorCode.AUTH_MEMBER_FORGET_PASSWORD_TOKEN_ERROR} 忘记密码token错误
		${ErrorCode.AUTH_MEMBER_FORGET_PASSWORD_TOKEN_EXPRIED_ERROR} 忘记密码token过期
	`,
    })
    @HttpCode(HttpStatus.OK)
    @Put('reset_password')
    public async resetPassword(@Body() dto: ResetPasswordDto) {
        return await this.authService.resetPassword(
            dto.forgetPasswordToken,
            dto.newPassword,
        );
    }

    @ApiOperation({ title: '用户邮件激活验证' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: Member,
        description: '成功返回User Entity',
    })
    @ApiResponse({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        type: Object,
        description: '参数验证失败',
    })
    @ApiResponse({
        status: HttpStatus.BAD_REQUEST,
        type: Object,
        description: `
        ${ErrorCode.AUTH_MEMBER_ACTIVATION_CODE_ERROR} 用户激活码错误
        ${ErrorCode.AUTH_MEMBER_ACTIVATED_ERROR} 用户已激活，不能重复激活
    `,
    })
    @HttpCode(HttpStatus.OK)
    @Put('activation')
    public async activation(@Body() dto: ActivationDto) {
        return await this.authService.activation(dto.code);
    }
}
