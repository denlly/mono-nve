import { AppHandler } from './app-handler.interface';
import * as config from 'config';
import { INestApplication, BadRequestException } from '@nestjs/common';
import * as openBrowsers from 'open-browsers';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';

export class HttpsHandler {
  private readonly _server;

  constructor(server) {
    if (!server) throw new BadRequestException();
    this._server = server;
  }
  // 系统开始时候
  async app_start(app: INestApplication) {
    const httpsPort = config.get<number>('httpsPort');
    const host = config.get<string>('host');
    const httpsOptions = {
      key: fs.readFileSync(path.join(__dirname, '../../certs/omon.key')),
      cert: fs.readFileSync(path.join(__dirname, '../../certs/omon.pem')),
    };

    https
      .createServer(httpsOptions, this._server)
      .listen(httpsPort, host, () => {
        console.log(`Application is listening on https://${host}:${httpsPort}`);
        if (openBrowsers(`https://localhost:3300`)) {
          console.log('🎉🎉https://localhost:3300 is opened！！');
        }
      });
  }

  // 系统停止时候
  app_stop(app: INestApplication) {}
}
