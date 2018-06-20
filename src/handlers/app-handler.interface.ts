import { INestApplication } from '@nestjs/common';

export interface AppHandler {
  // 系统开始时候
  app_start(app: INestApplication);

  // 系统停止时候
  app_stop(app: INestApplication);
}
