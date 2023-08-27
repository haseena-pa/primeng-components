import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-autocomplete';

  productList = [];
  selectedProduct: any;

  constructor(private appService: AppService) {

  }

  search($event: any) {
    this.appService.getProducts($event.query).subscribe(
      response => this.productList = response.products
    )
  }

  selectID(value: any) {
    console.log(value);
  }
}
