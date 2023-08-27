import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages1: Message[] = [];


  ngOnInit(): void {
    const htmlContent = `<strong>More details having html</strong>`;
    this.messages1 = [
      { severity: 'success', summary: 'Heading', detail: htmlContent }
    ];
  }
}