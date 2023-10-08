import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileUploadEvent } from 'primeng/fileupload';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-angular-fileupload';

  constructor(private fireStorage: AngularFireStorage) { }
  async onUpload($event: FileUploadEvent) {

    const promises: any[] = [];
    $event.files.forEach(file => promises.push(this.fireStorage.upload(`multiple/${file.name}`, file)));
    const observable = forkJoin([promises]);
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('all done')
    })

  }
}
