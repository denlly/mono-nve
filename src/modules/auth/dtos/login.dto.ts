import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsEmail()
  @ApiModelProperty({ example: 'fan91163@gmail.com' })
  readonly account: string;

  @IsString()
  @Length(6, 20)
  @ApiModelProperty({ example: '@1234567890' })
  readonly password: string;
}
