import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class RegisterDto {
    @ApiModelProperty({ example: 'fan91163@gmail.com', required: false })
    @IsString()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty({ example: '13800138000', required: false })
    @IsString()
    readonly mobile: string;

    @ApiModelProperty({ example: '@1234567890' })
    @IsString()
    @Length(6, 20)
    readonly password: string;
}
