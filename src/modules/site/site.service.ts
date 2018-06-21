import { Injectable, BadRequestException } from '@nestjs/common';
import { Repository, FindManyOptions } from 'typeorm';

import {
  CreateSiteDto,
  UpdateSiteDto,
  PagingSiteDto,
} from './dtos/main-site.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Site } from './site.entity';
import { isNullOrUndefined } from 'util';
@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site) private readonly _siteRepository: Repository<Site>,
  ) {}

  async create(createDto: CreateSiteDto): Promise<Site | undefined> {
    const site = Object.assign(new Site(), createDto);
    const result = await this._siteRepository.insert(site);
    return Object.assign(site, { keys: result.identifiers });
  }

  async findOne(id: number): Promise<Site | undefined> {
    const entity = await this._siteRepository.findOne({ id });
    console.log(entity);
    return entity;
  }

  async modify(updateDto: UpdateSiteDto): Promise<any> {
    const entity = Object.assign(new Site(), updateDto);
    return await this._siteRepository.save(entity);
  }

  // async remove();
  async all(): Promise<any> {
    const list = await this._siteRepository
      .createQueryBuilder()
      .where({ dr: 0 })
      .orderBy('id', 'DESC')
      .getMany();
    return list;
  }

  async Paging(pagingSiteDto: PagingSiteDto): Promise<any> {
    const list = await this._siteRepository
      .createQueryBuilder()
      .where({ dr: 0 })
      .orderBy('id', 'DESC')
      .offset(pagingSiteDto.skip)
      .limit(pagingSiteDto.limit)
      .getMany();
    return list;
  }

  async remove(id: number): Promise<any> {
    await this._siteRepository.delete({ id });
  }

  async removeMany(site: Site): Promise<any> {
    if (isNullOrUndefined(site)) {
      throw new BadRequestException();
    }
    await this._siteRepository.delete();
  }
  async removeMany(): Promise<any>;
}
