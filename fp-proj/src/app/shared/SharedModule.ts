import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { ValidationComponent } from './validation/validation.component'
import { RoleDirective } from './role.directive'

@NgModule({
  declarations: [
    ValidationComponent,
    RoleDirective
  ],
  imports: [
    CommonModule,
    QuicklinkModule
  ],
  exports: [
    QuicklinkModule,
    ValidationComponent,
    RoleDirective
  ]
})
export class SharedModule { }
