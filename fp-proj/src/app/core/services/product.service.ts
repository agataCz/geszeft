import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Observable, of, BehaviorSubject} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products';
  private _products = new BehaviorSubject<[Product[], number]>([[],0]);
  private dataStore: { products$ : Product[], productsCount$ : number } = { products$ : [], productsCount$: 0 };

  constructor(private httpClient: HttpClient,) { }

  getAllProducts(): Observable<[Product[], number]>{
    return this._products.asObservable() ;
  }

  fetchProducts(searchValue: string, pageNumber: number, pageLimit: number)
  {
    var url = '';
    if(searchValue)
   {
     url = `${this.productsUrl}?q=${searchValue}&_page=${pageNumber}&_limit=${pageLimit}`;
   }
    else
    {
      url = `${this.productsUrl}?_page=${pageNumber}&_limit=${pageLimit}`;
    }
    this.httpClient.get<Product[]>(url, {observe: 'response'}).subscribe(
      data => {
        this.dataStore.products$ = data.body;
        this.dataStore.productsCount$ = +data.headers.get('X-Total-Count');
        this._products.next([Object.assign({}, this.dataStore).products$, this.dataStore.productsCount$ ])
      }
    );
  }

  getProductById(id: string): Observable<Product>{
    const url = `${this.productsUrl}/${id}`
    return this.httpClient.get<Product>(url);
  }
}
