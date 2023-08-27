import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'primeng-toast';

  constructor(private messageService: MessageService) { }

  showToast() {
    this.messageService.add({ key: "c", severity: 'success', summary: 'Heading', detail: 'Are you sure?' });

  }

  clearToast() {
    this.messageService.clear("bleft");
  }

  onConfirm() {
    console.log('Confirm Clicked');
    this.messageService.clear("c");
  }

  onReject() {
    this.messageService.clear("c");
  }
}