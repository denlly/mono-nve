import { AppHandler } from './app-handler.interface';
import * as config from 'config';
import { INestApplication, BadRequestException } from '@nestjs/common';
import * as openBrowsers from 'open-browsers';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';

export class NestHandler {
  private readonly _server;

  constructor(server) {
    if (!server) throw new BadRequestException();
    this._server = server;
  }
  // 系统开始时候
  async app_start(app: INestApplication) {
    const apiBasePath = config.get<string>('apiBasePath');
    app.setGlobalPrefix(apiBasePath);
    // [TODO:增加多种组件和中间件]
  }

  // 系统停止时候
  app_stop(app: INestApplication) {}
}
