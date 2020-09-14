import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'geszeft-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
  }

  onSave(product: Product){
    }

}
