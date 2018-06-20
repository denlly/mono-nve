import { AppHandler } from './app-handler.interface';
import * as config from 'config';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerHandler {
  // 系统开始时候
  app_start(app: INestApplication) {
    // swagger handle begin
    if (config.get<boolean>('swagger.enable')) {
      const apiBasePath = config.get<string>('apiBasePath');
      app.setGlobalPrefix(apiBasePath);
      const packageBody = require('../../package.json');
      const options = new DocumentBuilder()
        .setTitle(packageBody.name)
        .setDescription(packageBody.description)
        .setVersion(packageBody.version)
        .setSchemes('https')
        // .addBearerAuth('Authorization', 'header')
        .addBearerAuth()
        .setBasePath(apiBasePath)
        .build();
      const document = SwaggerModule.createDocument(app, options);
      SwaggerModule.setup('docs', app, document);
      console.log('swagger is running');
    }
  }

  // 系统停止时候
  app_stop(app: INestApplication) {}
}
