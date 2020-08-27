import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../../core/services/product.service'
import { Product } from '../../../models/Product'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
    .subscribe(p => this.product = p);
  }

  goBack(): void {
    this.location.back();
  }

}
