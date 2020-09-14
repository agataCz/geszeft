import { Injectable } from '@angular/core';
import { Product } from '../../models/Product'
import { Observable, of, BehaviorSubject, interval, Subscription, Subject} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private subscription: Subscription;
  private productsUrl = 'api/products';
  private _products = new BehaviorSubject<[Product[], number]>([[],0]);
  private _allProducts = new BehaviorSubject<Product[]>([]);
  private _randomProducts = new BehaviorSubject<Product[]>([]);
  private dataStore: { products$ : Product[], productsCount$ : number } = { products$ : [], productsCount$: 0 };
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {
       const source = interval(10000);
       this.subscription = source.subscribe(val => this.generateRandomProducts());
   }

   generateRandomProducts()
   {
     const shuffled = this._allProducts.value.sort(() => Math.random() - Math.random());
     this._randomProducts.next(shuffled.slice(0, 3));
   }

   getRandomProducts()
   {
      this.generateRandomProducts();
      return this._randomProducts.asObservable();
   }

  fetchRandomProducts()
  {
    this.httpClient.get<Product[]>(this.productsUrl).subscribe(data=>
      {
        this._allProducts.next(data);
        this.generateRandomProducts();
      });
  }

  getProducts(): Observable<[Product[], number]>{
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

// updateProduct(product: Product): Observable<any> {
//   return this.httpClient.put(this.productsUrl, product, this.httpOptions).pipe(
//     tap(_ => console.log(`Updated product id=${product.id}`))
//    )
//   );
}
