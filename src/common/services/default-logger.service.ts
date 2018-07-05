import * as winston from 'winston';
import { Component, LoggerService } from '@nestjs/common';
import * as moment from 'moment';

@Component()
export class DefaultLoggerService<ClassType> implements LoggerService {
  private _logger;
  private _model;
  private readonly datafmt = 'YYYY-M-D HH:mm:ss';
  /**
   * Creates an instance of CustomLoggerService.
   * @param {string} [label=''] logger标签前缀
   * @memberof DefaultLoggerService
   */
  constructor(className: string) {
    this._model = className;
    this._logger = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }

  public verbose(message: any, ...meta: any[]) {
    this._logger.verbose(message, ...meta);
  }

  public debug(message: any, ...meta: any[]) {
    this._logger.debug(message, ...meta);
  }

  public log(message: any, ...meta: any[]) {
    this._logger.info(message, {
      datetime: moment().format(this.datafmt),
      classname: this._model,
      params: [...meta],
    });
  }

  public info(message: any, ...meta: any[]) {
    this._logger.info(message, {
      datetime: moment().format(this.datafmt),
      classname: this._model,
      params: [...meta],
    });
  }

  public warn(message: any, ...meta: any[]) {
    this._logger.warn(message, ...meta);
  }

  public error(message: any, ...meta: any[]) {
    this._logger.error(message, ...meta);
  }
}
