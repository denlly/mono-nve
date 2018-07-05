import {
  Component,
  Inject,
  BadRequestException,
  ConflictException,
  mixin,
} from '@nestjs/common';
import * as moment from 'moment';
import * as config from 'config';
import { createHandyClient } from 'handy-redis';
import { ClientOpts } from 'redis';
import { BaseService } from '../../common/base-class/base.service';

@Component()
export class RedisService extends BaseService<RedisService> {
	public readonly client = createHandyClient(config.get<string>(
		'redis',
	) as ClientOpts);

	constructor() {
		super('RedisService');
	}
}
