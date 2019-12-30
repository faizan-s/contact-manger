import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Component, Inject, OnInit } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-cm-editcontact',
  templateUrl: './cm-editcontact.component.html',
  styleUrls: ['./cm-editcontact.component.css']
})
export class CmEditcontactComponent implements OnInit {

  contactsListNew = [];
  statusList = ['Active', 'Inactive'];
  submitted = false;
  hideForm = true;
  model = new Contact();
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }
  onSubmit() { this.submitted = true; }
  updateContact(ctx) {
    console.log(this.storage.get('contactsList'));
    console.log(ctx);
    this.model = ctx;
    this.hideForm = false;
  }
  editContact() {
    const list = this.storage.get('contactsList');
    for (let k = 0; k < list.length; k++) {
      const contact = list[k];
      if (this.model.id === contact.id) {
        list[k] = this.model;
      }
    }
    this.storage.set('contactsList', list);
    this.contactsListNew = this.storage.get('contactsList');
  }
  showList() {
    setTimeout(() => {
      this.hideForm = true;
    }, 500);
  }
  ngOnInit() {
    this.contactsListNew = this.storage.get('contactsList');
  }

}
