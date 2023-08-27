import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getProducts(query: string) {
    return this.http.get<any>(`https://dummyjson.com/products/search?q=${query}`);
  }
}
