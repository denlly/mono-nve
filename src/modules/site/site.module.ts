import { Module } from '@nestjs/common';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  components: [SiteService],
  controllers: [SiteController],
  providers: [SiteService],
})
export class SiteModule {}
