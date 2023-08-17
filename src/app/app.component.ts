import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  basicData: any;
  basicOptions: any;

  ngOnInit() {
    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'First Dataset',
          data: [10, 20, 30, 40],
        }
      ]
    };
    this.basicOptions = {
      indexAxis: 'y',
      elements: {
        bar: {
          backgroundColor: 'red'
        }
      }
    }
  }

  selectData(event: any) {
    console.log(event);
  }
}
