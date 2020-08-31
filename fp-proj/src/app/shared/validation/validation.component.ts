import { Component, OnInit, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationErrors, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'geszeft-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit, OnChanges {

  @Input() errors: ValidationErrors
  message: string
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.SetError(changes.errors.currentValue);
  }

  SetError(validationErrorsCurrent: any) {

    if(validationErrorsCurrent === null)
    {
      this.message = null;
    }
    if(validationErrorsCurrent.required)
    {
      this.message ="Field is required";
    }
    if(validationErrorsCurrent.email)
    {
      this.message ="Field should be in email format";
    }
    if(validationErrorsCurrent.minlength)
    {
       this.message = `Field must be at least: ${validationErrorsCurrent.minlength.requiredLength} characters long.`
    }
    if(validationErrorsCurrent.maxlength)
    {
       this.message = `Field must be maximum: ${validationErrorsCurrent.maxlength.requiredLength} characters long.`
    }
    if(validationErrorsCurrent.maxlength)
    {
       this.message = `Wrong field format: ${validationErrorsCurrent.maxlength.requiredLength} characters long.`
    }
  }

}
