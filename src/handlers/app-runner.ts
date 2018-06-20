import { INestApplication } from '@nestjs/common';
import { AppHandler } from './app-handler.interface';

export class AppRunner {
  private _handlers: AppHandler[];

  regiest(handler: AppHandler) {
    this._handlers.push(handler);
    return this;
  }
  run() {}
}
