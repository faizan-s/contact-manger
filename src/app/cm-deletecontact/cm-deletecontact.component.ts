import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-deletecontact',
  templateUrl: './cm-deletecontact.component.html',
  styleUrls: ['./cm-deletecontact.component.css']
})
export class CmDeletecontactComponent implements OnInit {

  contactsList = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.contactsList = this.storage.get('contactsList');
  }
  deleteContact(model) {
    const list = this.storage.get('contactsList');
    let indexToRemove = null;
    for (let k = 0; k < list.length; k++) {
      const contact = list[k];
      if (model.id === contact.id) {
        indexToRemove = k;
      }
    }
    if (indexToRemove != null) {
      list.splice(indexToRemove, 1);
    }
    this.storage.set('contactsList', list);
    this.contactsList = this.storage.get('contactsList');
  }
  ngOnInit() {
  }

}
