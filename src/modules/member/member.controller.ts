import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Req,
  Body,
  Query,
  Param,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateMemberDto, UpdateMemberDto } from './dtos/main-member.dto';
import { MemberService } from './member.service';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from '../../common/base-class/base.controller';

@Controller('member')
@ApiUseTags('member')
export class MemberController extends BaseController<MemberController> {
  constructor(private readonly memberService: MemberService) {
    super('MemberController');
  }

  @Get(':id')
  @UseGuards(AuthGuard('bearer'))
  async getById(@Param('id') id: number): Promise<any> {
    return (await 'This action returns all cats') + id;
  }

  @Get('list')
  async getList(@Param() params): Promise<any[]> {
    return params;
  }

  @Post('create')
  @HttpCode(201)
  @ApiOperation({ title: 'Create a member!' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createMemberDto: CreateMemberDto) {
    return await this.memberService.create(createMemberDto);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return 'id #' + id;
  }

  @Put('update')
  update(@Body() updateMemberDto: UpdateMemberDto) {
    return '';
  }
}
