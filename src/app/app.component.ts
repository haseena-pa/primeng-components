import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-angular-16';
  myGroup = new FormGroup({
    switchChecked: new FormControl<string>('yes')
  });

  handleEvent(e: any) {
    console.log(e)
  }
}
