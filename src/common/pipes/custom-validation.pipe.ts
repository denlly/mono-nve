import { validate, ValidatorOptions } from 'class-validator';
import { classToPlain, plainToClass } from 'class-transformer';
import {
  Pipe,
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { isNil } from '@nestjs/common/utils/shared.utils';

export interface ValidationPipeOptions extends ValidatorOptions {
  transform?: boolean;
}

@Pipe()
export class CustomValidationPipe implements PipeTransform<any> {
  private isTransformEnabled: boolean;
  private validatorOptions: ValidatorOptions;

  constructor(options?: ValidationPipeOptions) {
    options = options || {};
    const { transform, ...validatorOptions } = options;
    this.isTransformEnabled = !!transform;
    this.validatorOptions = validatorOptions;
  }

  public async transform(value, metadata: ArgumentMetadata) {
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metadata)) {
      return value;
    }
    const entity = plainToClass(metatype, value);
    const errors = await validate(entity, this.validatorOptions);
    if (errors.length > 0) {
      throw new UnprocessableEntityException(errors, 'Validation failed');
    }
    return this.isTransformEnabled
      ? entity
      : Object.keys(this.validatorOptions).length > 0
        ? classToPlain(entity)
        : value;
  }

  private toValidate(metadata: ArgumentMetadata): boolean {
    const { metatype, type } = metadata;
    if (type === 'custom') {
      return false;
    }
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type) && !isNil(metatype);
  }
}
