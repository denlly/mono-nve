import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

import * as express from 'express';

import { SwaggerHandler } from './handlers/swagger-handler';
import { HttpHandler } from './handlers/http-handler';
import { HttpsHandler } from './handlers/https-handler';
import { NestHandler } from './handlers/nest-handler';
import * as config from 'config';
import { HttpCode } from '@nestjs/common';
async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server, {
    cors: true,
  });

  // [TODO:按照next()的方式实现或者其他更好的实现方式]
  await new NestHandler(server).app_start(app);

  await new SwaggerHandler().app_start(app);

  await new HttpHandler(server).app_start(app);

  await new HttpsHandler(server).app_start(app);

  await app.init();
}
bootstrap();
