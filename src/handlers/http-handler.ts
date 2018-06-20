import { AppHandler } from './app-handler.interface';
import * as config from 'config';
import { INestApplication, BadRequestException } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as http from 'http';

export class HttpHandler {
  private readonly _server;

  constructor(server) {
    if (!server) throw new BadRequestException();
    this._server = server;
  }
  // 系统开始时候
  app_start(app: INestApplication) {
    const httpPort = config.get<number>('httpPort');
    const host = config.get<string>('host');
    // 同时监听80和443端口
    http.createServer(this._server).listen(httpPort, host, () => {
      console.log(`Application is listening on http://${host}:${httpPort}`);
    });
  }

  // 系统停止时候
  app_stop(app: INestApplication) {}
}
