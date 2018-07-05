import { DefaultLoggerService } from '../services/default-logger.service';

export class BaseService<ServiceClass> {
  public _logger;

  constructor(serviceName: string) {
    this._logger = new DefaultLoggerService<ServiceClass>(serviceName);
  }
}
