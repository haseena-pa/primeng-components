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
    values: new FormControl<string[]>([])
  });

  onAddChip(e: any) {
    console.log('add', e)
  }

  onRemoveChip(e: any) {
    console.log('remove', e);
  }

  onChipClick(e: any) {
    console.log('onchipclick', e)
  }
}
