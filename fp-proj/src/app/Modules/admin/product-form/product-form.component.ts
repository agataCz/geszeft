import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'geszeft-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Input() product: Product
  @Output() save = new EventEmitter<Product>()

  requestSended: boolean = false;

  pricePattern = "^\\d+(\\.\\d{1,2})?$";

  productForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(this.pricePattern)])
    }
  )
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.productForm.patchValue({name: this.product.name, description: this.product.description, price: this.product.price})
  }

  ngOnInit(): void {
  }

  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get price() { return this.productForm.get('price'); }

  onSubmit(){
    Object.keys(this.productForm.controls).forEach(field => {
      const control = this.productForm.get(field);
      control.markAsDirty({ onlySelf: true });
    });

    if(this.productForm.valid)
    {
      this.save.emit({name: this.name.value, description: this.description.value, price: this.price.value, id: this.product ? this.product.id : null });
      this.requestSended = true;
    }
  }
}
