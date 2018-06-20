import { Injectable } from '@nestjs/common';
import { Repository, FindManyOptions } from 'typeorm';

import { CreateSiteDto } from './dtos/main-site.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Site } from './site.entity';
@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site) private readonly _siteRepository: Repository<Site>,
  ) {}

  async create(createDto: CreateSiteDto): Promise<Site | undefined> {
    const site = Object.assign(new Site(), createDto);
    return await this._siteRepository.create(site);
  }
}
