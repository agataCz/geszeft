import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/SharedModule'

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { MainModule } from 'src/app/main/main.module';


@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CoreModule,
    MainModule
  ]
})
export class ProductsModule { }
