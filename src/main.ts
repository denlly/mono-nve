import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as openBrowsers from 'open-browsers';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger handle begin
  if (config.get<boolean>('swagger.enable')) {
    const apiBasePath = config.get<string>('apiBasePath');
    app.setGlobalPrefix(apiBasePath);
    const packageBody = require('../package.json');
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
    SwaggerModule.setup('doc', app, document);
  }
  await app.listen(3300);

  if (openBrowsers(`http://localhost:3300`)) {
    console.log('🎉🎉http://localhost:3300 is opened！！');
  }
}
bootstrap();
