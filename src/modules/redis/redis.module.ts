import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';

@Module({
    components: [RedisService],
    exports: [RedisService],
})
export class RedisModule {}
