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
  UseInterceptors,
  FilesInterceptor,
  UploadedFiles,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { FileService } from './file.service';
import { BaseController } from '../../common/base-class/base.controller';

@Controller('file')
@ApiUseTags('file')
export class FileController extends BaseController<FileController> {
  constructor(private readonly _fileService: FileService) {
    super('SiteController');
  }

  /**
   * 单文件上传
   * @param file
   */
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ title: 'upload a file!' })
  @Post('upload')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
  }

  /**
   * 多文件上传
   * @param files
   */
  @Post('uploads')
  @ApiOperation({ title: 'upload some files!' })
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files) {
    console.log(files);
  }
  @Get('doc/:hashname')
  async getDoc(@Param('hashname') hashname: string) {
    this._logger.log({hashname});
    return { hashname };
  }
  @Get('img/:hashname')
  async getImg(@Param('hashname') hashname: string) {
    return { hashname };
  }
}
