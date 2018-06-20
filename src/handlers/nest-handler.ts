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
  app_start(app: INestApplication) {}

  // 系统停止时候
  app_stop(app: INestApplication) {}
}
