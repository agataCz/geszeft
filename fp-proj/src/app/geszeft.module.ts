import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { GeszeftComponent } from './geszeft.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { GeszeftRoutingModule } from './geszeft-routing.module';
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    GeszeftComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    GeszeftRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [GeszeftComponent]
})
export class GeszeftModule { }
