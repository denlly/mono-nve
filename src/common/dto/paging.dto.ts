import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString, IsNumber } from 'class-validator';

export class PagingDto {
  @IsNumber()
  @ApiModelProperty({ example: 1 })
  skip: number;

  @IsNumber()
  @ApiModelProperty({ example: 10 })
  limit: number;
}
