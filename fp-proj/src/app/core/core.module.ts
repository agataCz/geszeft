import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService} from './services/product.service'
import { LoadingService } from './services/loading.service'
import { ContactService } from './services/contact.service'
import { AuthorizationService } from './services/authorization.service'
import { HttpClientModule } from '@angular/common/http'
import { PaginationModule } from 'ngx-bootstrap/pagination'
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    OAuthModule.forRoot()
  ],
  providers:[
    ProductService,
    LoadingService,
    ContactService,
    AuthorizationService
  ]
})
export class CoreModule { }
