import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'
import { LoadingService } from '../../../core/services/loading.service'
import { ProductService } from '../../../core/services/product.service'
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]>;

   constructor(
    public loadingService: LoadingService,
    private productService: ProductService
  ) {

    this.products$= this.productService.getAllProducts().pipe(shareReplay());
    this.productService.fetchProducts();
  }

  ngOnInit(): void {

  }

  selectProduct(): void {}

  isPriceValid(price: number): boolean{
    return price === 0
  }

  getProducts(){
    this.productService.getAllProducts
  }
}
