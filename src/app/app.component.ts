import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    if (!this.storage.get('contactsList')) {
      const contactsList = new Array();
      this.storage.set('contactsList', contactsList);
    }
  }
  public data: any = [];
  title = 'Contact Manager';


}
