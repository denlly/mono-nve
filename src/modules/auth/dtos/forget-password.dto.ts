import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class ForgetPasswordDto {
  @IsString()
  @IsEmail()
  @ApiModelProperty({ example: 'fan91163@gmail.com' })
  readonly email: string;

  @ApiModelProperty({ example: 'XXX', required: false })
  readonly google_recaptcha: string;

  @ApiModelProperty({ example: 'XXX', required: false })
  readonly geetest_challenge: string;

  @ApiModelProperty({ example: 'XXX', required: false })
  readonly geetest_validate: string;

  @ApiModelProperty({ example: 'XXX', required: false })
  readonly geetest_seccode: string;
}
