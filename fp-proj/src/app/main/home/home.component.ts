import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../core/services/product.service'


@Component({
  selector: 'geszeft-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$:  Observable<Product[]>;

  constructor(productService: ProductService) {

    this.products$ = productService.getRandomProducts();
   }

  ngOnInit(): void {
  }


}
