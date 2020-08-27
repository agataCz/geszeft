import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Observable, of } from 'rxjs'
import { find, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';

  private products: Product[]=[
    { id: "1", name: "Name1", description: "Description1", price: 1},
    { id: "2", name: "Name2", description: "Description2", price: 2},
    { id: "3", name: "Name3", description: "Description3", price: 0},
    { id: "4", name: "Name4", description: "Description4", price: 4},
  ];
  private products$: Observable<Product[]>=of(this.products);

  constructor(private httpClient: HttpClient,) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productsUrl)
  }

  getProductById(id: string): Observable<Product>{

    return this.products$.pipe(
      map(products => products.find(product => product.id === id)))
  }
}
