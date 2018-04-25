import { Component,Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    if(!this.storage.get('contactsList')){
      let contactsList = new Array();
      this.storage.set('contactsList',contactsList);
    }
  }
  public data:any=[]
  title = 'Contact Manager';
  
 
}
