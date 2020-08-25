import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product[]=[
    { id: "1", name: "Name1", description: "Description1", price: 1},
    { id: "2", name: "Name2", description: "Description2", price: 2},
    { id: "3", name: "Name3", description: "Description3", price: 0},
    { id: "4", name: "Name4", description: "Description4", price: 4},
  ]

  ngOnInit(): void {
  }

  selectProduct(): void {}

  isPriceValid(price: number): boolean{
    return price === 0
  }
}
