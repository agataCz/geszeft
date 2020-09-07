import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from '../../../models/Product'
import { LoadingService } from '../../../core/services/loading.service'
import { ProductService } from '../../../core/services/product.service'
import { Observable, Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { ProductFilterComponent } from 'src/app/main/product-filter/product-filter.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {


  @ViewChild(ProductFilterComponent) productFilter : ProductFilterComponent

  products: Product[];
  productsCount: number
  searchText: string;
  pageLimit: number = 5;

  private unsubscribe$ = new Subject<void>();
  currentPage = 1;

   constructor(
    public loadingService: LoadingService,
    private productService: ProductService
  ) {

    this.productService.getAllProducts().pipe(shareReplay(), takeUntil(this.unsubscribe$)).subscribe(resp=>{
      this.products = resp[0],
      this.productsCount = resp[1],
      console.log(resp[1])
    });
    this.productService.fetchProducts(``, 1, this.pageLimit);
  }

  ngOnInit(): void {

  }

  selectProduct(): void {}

  isPriceValid(price: number): boolean{
    return price === 0
  }

  onSearch(){
    this.productService.fetchProducts(this.productFilter.searchValue, 1, this.pageLimit);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  pageChanged(event: any): void {
    const page = event.page;
    this.productService.fetchProducts(this.productFilter.searchValue, page, this.pageLimit);
  }
}
