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
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { CreateSiteDto, UpdateSiteDto } from './dtos/main-site.dto';
import { SiteService } from './site.service';
@Controller('site')
@ApiUseTags('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get(':id')
  async getById(@Param('id') id: number): Promise<any> {
    return (await 'This action returns all cats') + id;
  }

  @Get('list')
  async getList(@Param() params): Promise<any[]> {
    return params;
  }

  @Post('create')
  @HttpCode(201)
  @ApiOperation({ title: 'Create a site!' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createSiteDto: CreateSiteDto) {
    return await this.siteService.create(createSiteDto);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return 'id #' + id;
  }

  @Put('update')
  update(@Body() updateSiteDto: UpdateSiteDto) {
    return '';
  }
}
