import { DefaultLoggerService } from '../services/default-logger.service';

export class BaseController<ControllerClass> {
  public _logger;

  constructor(controllerName: string) {
    this._logger = new DefaultLoggerService<ControllerClass>(controllerName);
  }
}
