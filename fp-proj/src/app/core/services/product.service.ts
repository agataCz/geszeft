import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Observable, of, BehaviorSubject} from 'rxjs'
import { find, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private _products = new BehaviorSubject<Product[]>([]);
  readonly products$ = this._products.asObservable();
  private dataStore: { products$ : Product[] } = { products$ : [] };

  constructor(private httpClient: HttpClient,) { }

  getAllProducts(): Observable<Product[]>{
    return this._products.asObservable();
  }

  fetchProducts()
  {
    this.httpClient.get<Product[]>(this.productsUrl).subscribe(
      data => {
        this.dataStore.products$ = data;
        this._products.next(Object.assign({}, this.dataStore).products$)
      }
    );
  }

  getProductById(id: string): Observable<Product>{
    const url = `${this.productsUrl}/${id}`
    return this.httpClient.get<Product>(url);
  }
}
