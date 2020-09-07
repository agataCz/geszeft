import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/Product'
import { LoadingService } from '../../../core/services/loading.service'
import { ProductService } from '../../../core/services/product.service'
import { Observable, fromEvent } from 'rxjs';
import { shareReplay, debounceTime } from 'rxjs/operators';
import { ProductFilterComponent } from 'src/app/main/product-filter/product-filter.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  @ViewChild(ProductFilterComponent) productFilter : ProductFilterComponent

  products$: Observable<Product[]>;
  searchText;

   constructor(
    public loadingService: LoadingService,
    private productService: ProductService
  ) {

    this.products$= this.productService.getAllProducts().pipe(shareReplay());
    this.productService.fetchProducts(``);
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

  onSearch(){
    this.productService.fetchProducts(this.productFilter.searchValue);
  }
}
