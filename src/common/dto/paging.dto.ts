import { ApiModelProperty } from '@nestjs/swagger';
import {
    IsNumberString,
} from 'class-validator';

export class PagingDto {
    @IsNumberString()
    @ApiModelProperty({ example: 0, default: 0 })
    readonly skip: number;

    @IsNumberString()
    @ApiModelProperty({ example: 20, default: 20})
    readonly limit: number;
}