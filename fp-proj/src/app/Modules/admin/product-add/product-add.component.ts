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

  ngOnInit(): void {}

  onSave(product: Product) {
    let result;
    this.productService.addProduct(product).subscribe((t) => {
      if (t) {
        console.log('success');
      } else {
        console.log('failure');
      }
    })

  }
}
