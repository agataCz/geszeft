import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from '../shared/SharedModule'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports: [
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent]
})
export class MainModule { }
