import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsListComponent } from '../products/products-list/products-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
