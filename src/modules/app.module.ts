import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';

import { MemberModule } from './member/member.module';
import { SiteModule } from './site/site.module';
import { FileModule } from './file/file.module';
import { RedisModule } from './redis/redis.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.get<string>('typeorm.type') as 'postgres',
      host: config.get<string>('typeorm.host'),
      port: config.get<number>('typeorm.port'),
      username: config.get<string>('typeorm.username'),
      password: config.get<string>('typeorm.password'),
      database: config.get<string>('typeorm.database'),
      entities: config.get<string[]>('typeorm.entities'),
      synchronize: config.get<boolean>('typeorm.synchronize'),
      subscribers: config.get<string[]>('typeorm.subscribers'),
      logging: config.get<boolean>('typeorm.logging'),
    }),
    RedisModule,
    MemberModule,
    SiteModule,
    // ManagerModule,
    FileModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {}
}
