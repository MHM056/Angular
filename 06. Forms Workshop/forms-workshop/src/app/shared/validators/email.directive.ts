import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})

export class EmailDirective implements Validator, OnChanges {
  constructor() { }

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control);
    return this.validator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue } = changes['appEmail'];

    if (currentValue?.length) {
      this.validator = emailValidator(currentValue);
    }
  }
}

