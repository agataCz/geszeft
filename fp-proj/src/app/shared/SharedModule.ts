import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ValidationComponent } from './validation/validation.component'

@NgModule({
  declarations: [ValidationComponent],
  imports: [
    CommonModule,
    QuicklinkModule
  ],
  exports: [
    QuicklinkModule,
    ValidationComponent
  ]
})
export class SharedModule { }
