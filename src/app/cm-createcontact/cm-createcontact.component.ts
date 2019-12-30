import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Component, Inject, OnInit } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'app-cm-createcontact',
  templateUrl: './cm-createcontact.component.html',
  styleUrls: ['./cm-createcontact.component.css']
})
export class CmCreatecontactComponent implements OnInit {
  submitted = false;
  model = new Contact();
  showAlert = false;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }
  newContact() {
    console.log(this.model.fname);
    const contactsList = this.storage.get('contactsList');
    this.model.id = new Date().valueOf().toString();
    this.model.status = 'Active';
    contactsList.push(this.model);
    this.storage.set('contactsList', contactsList);
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000);
  }
}
