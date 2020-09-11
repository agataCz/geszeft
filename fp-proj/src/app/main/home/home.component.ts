import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../core/services/product.service'
import { shareReplay } from 'rxjs/operators';


@Component({
  selector: 'geszeft-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$:  Observable<Product[]>;

  constructor(
    private productService: ProductService
    ) {
    this.products$ =  this.productService.getRandomProducts().pipe(shareReplay());
    this.productService.fetchRandomProducts();
   }

  ngOnInit(): void {
  }


}
