import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product, ProductsResponse } from './product';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  totalRecords: number = 0;
  loading: boolean = true;
  cols: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Product Name' },
      { field: 'price', header: 'Price' }
    ];
  }
  loadProducts() {
    this.appService.getProducts().subscribe(
      (response: ProductsResponse) => {
        console.log(this.products)
        this.products = response.products;
      }
    )
  }

  columnReorder($event: any) {
    console.log('column', $event);
  }

  rowReorder($event: any) {
    console.log('row', $event);
  }
}

