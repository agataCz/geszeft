import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'geszeft-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  requestSended: boolean = false;
  requestSucceeded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    this.route.queryParams.subscribe(param => {
      this.product = {
        description: param['description'],
        name: param['name'],
        price: param['price'],
        id: param['id']};
    });
  }

  ngOnInit(): void {
  }

  onSave(product: Product){
    this.productService.updateProduct(product).subscribe((result) => {
      this.requestSended = true;
      if (result) {
        this.requestSucceeded = true;
      } else {
        this.requestSucceeded = false;
      }
    })

  }

}
