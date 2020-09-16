import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink'
import { AuthGuard } from './auth.guard'

import { HomeComponent } from './main/home/home.component';
import { ContactComponent} from './main/contact/contact.component'
import { PageNotFoundComponent} from './main/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule)},
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule)},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:
  [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
