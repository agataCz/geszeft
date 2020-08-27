import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService} from './services/product.service'
import { LoadingService } from './services/loading.service'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[
    ProductService,
    LoadingService
  ]
})
export class CoreModule { }
