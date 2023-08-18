import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  productsUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts(skip: number) {
    return this.http.get<{ products: Product[] }>(`${this.productsUrl}?skip=${skip}&limit=10`);
  }
}
