import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MemberModule } from 'modules/member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';

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
		MemberModule,
		// ManagerModule,
	],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {}
}
