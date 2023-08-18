import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primeng-angular-16';
  products: Product[] = [];
  selectedProduct: Product | undefined;
  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.getProductsList(0);
  }

  getProductsList(skip: number) {
    this.appService.getProducts(skip).subscribe(
      response => this.products = response.products
    )
  }

  onLazyLoad({ first, last }: { first: number; last: number }) {
    // not working as expected
    console.log(first, last)
    if (first === last - 4) {
      this.appService.getProducts(last).subscribe(
        response => this.products = [...this.products, ...response.products]
      )
    }

  }
}
