import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-angular-16';
  sidebarVisible = false;

  onShowSidebar($event: any) {
    console.log($event)
  }

  onHideSidebar($event: any) {
    console.log('hide', $event)
  }

  sidebarChange($event: any) {
    console.log('visiblechange', $event)
  }
}
