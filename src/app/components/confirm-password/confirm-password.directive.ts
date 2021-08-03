import { Directive, Input, OnChanges , SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';




@Directive({
    selector :'[appConfirmPassword]',
    providers :[{
        provide : NG_VALIDATORS,
        useExisting : ConfirmPasswordDirective,
        multi : true
    }]
})
export class ConfirmPasswordDirective implements Validator, OnChanges{
    confirmPassword: string;
    private _onChange: () => void;
  
    validate(control: AbstractControl): {[key: string]: any} | null {
      return this.confirmPassword ? 
      confirmPasswordValidator(this.confirmPassword)(control): null;
    }
  
    registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }
  
    ngOnChanges(changes: SimpleChanges) {
      if ('confirmPassword' in changes) {
        if (this._onChange) this._onChange();
      }
   
    }    
}
export function confirmPasswordValidator(confirmPassword: String): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let password: string = control.value;
      let isInValid = (password !== confirmPassword) ? true : false;
      return isInValid ? {'cnfPassword': {value: 'Invalid'}} : null;
    }
}
