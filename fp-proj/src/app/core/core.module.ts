import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService} from './services/product.service'
import { LoadingService } from './services/loading.service'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    ProductService,
    LoadingService
  ]
})
export class CoreModule { }
