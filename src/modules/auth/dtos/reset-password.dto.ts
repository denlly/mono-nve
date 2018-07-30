import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsUUID } from 'class-validator';

export class ResetPasswordDto {
    @IsString()
    @IsUUID('4')
    @ApiModelProperty()
    readonly forgetPasswordToken: string;

    @IsString()
    @Length(6, 20)
    @ApiModelProperty({ example: '123456789' })
    readonly newPassword: string;
}
