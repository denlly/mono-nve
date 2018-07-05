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
  HttpStatus,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import {
  CreateSiteDto,
  UpdateSiteDto,
  PagingSiteDto,
} from './dtos/main-site.dto';
import { SiteService } from './site.service';
import { BaseController } from '../../common/base-class/base.controller';

@Controller('site')
@ApiUseTags('site')
export class SiteController extends BaseController<SiteController> {
  constructor(private readonly _siteService: SiteService) {
    super('SiteController');
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ title: 'Create a site!' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  async create(@Body() createSiteDto: CreateSiteDto) {
    return await this._siteService.create(createSiteDto);
  }

  @Get('id/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get a entity!',
  })
  async findById(@Param('id') id: number): Promise<any> {
    return await this._siteService.findOne(id);
  }

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Put('update')
  async update(@Body() updateSiteDto: UpdateSiteDto) {
    return await this._siteService.modify(updateSiteDto);
  }
  @Get('all')
  // @MemberGuards(AuthGuard('bearer'))
  async getAll(@Param() params): Promise<any[]> {
    this._logger.log('getAll is called', params);
    return await this._siteService.all();
  }
  @Get('paging')
  async paging(@Query() pagingSiteDto: PagingSiteDto): Promise<any[]> {
    this._logger.log('paging is called', pagingSiteDto);
    return await this._siteService.Paging(pagingSiteDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this._siteService.remove(id);
  }
}
