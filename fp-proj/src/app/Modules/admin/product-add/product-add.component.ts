import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'geszeft-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  constructor(private productService: ProductService) {}

  requestSended: boolean = false;
  requestSucceeded: boolean = false;

  ngOnInit(): void {}

  onSave(product: Product) {
    this.productService.addProduct(product).subscribe((result) => {
      this.requestSended = true;
      if (result) {
        this.requestSucceeded = true;
      } else {
        this.requestSucceeded = false;
      }
    })
  }
}
