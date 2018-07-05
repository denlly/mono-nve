import { Injectable, BadRequestException } from '@nestjs/common';
import { Repository, FindManyOptions } from 'typeorm';
import { BaseService } from '../../common/base-class/base.service';
import { InjectRepository } from '@nestjs/typeorm';

import { isNullOrUndefined } from 'util';
@Injectable()
export class FileService extends BaseService<FileService> {
  constructor() {
    super('FileService');
  }
}
