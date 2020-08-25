import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedQuicklinkModuleModule } from '../shared-quicklink-module/shared-quicklink-module.module'

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedQuicklinkModuleModule
  ]
})
export class ProductsModule { }
