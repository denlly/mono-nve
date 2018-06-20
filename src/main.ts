import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

import * as express from 'express';

import { SwaggerHandler } from './handlers/swagger-handler';
import { HttpHandler } from './handlers/http-handler';
import { HttpsHandler } from './handlers/https-handler';
import { NestHandler } from './handlers/nest-handler';
import { HttpCode } from '@nestjs/common';
async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server, {
    cors: true,
  });

  new NestHandler(server).app_start(app);

  new SwaggerHandler().app_start(app);

  new HttpHandler(server).app_start(app);

  new HttpsHandler(server).app_start(app);
}
bootstrap();
