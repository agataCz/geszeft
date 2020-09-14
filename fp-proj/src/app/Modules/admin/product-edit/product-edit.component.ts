import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'geszeft-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  @ViewChild(ProductFormComponent) productForm : ProductFormComponent

  constructor(private route: ActivatedRoute) {
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
  }

}
