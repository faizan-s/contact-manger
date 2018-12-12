import { Component, OnInit, Inject } from '@angular/core';
import { Contact } from '../contact';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import * as $ from 'jquery';

@Component({
  selector: 'app-cm-editcontact',
  templateUrl: './cm-editcontact.component.html',
  styleUrls: ['./cm-editcontact.component.css']
})
export class CmEditcontactComponent implements OnInit {

  contactsListNew = [];
  statusList = ['Active', 'Inactive'];
  submitted = false;
  model = new Contact();
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    // this.contactsListNew = this.storage.get('contactsList');
  }
  onSubmit() { this.submitted = true; }
  updateContact(ctx) {
    console.log(this.storage.get('contactsList'));
    console.log(ctx);
    this.model = ctx;
    $('.form-div').removeClass('d-none');
    $('.table-div').addClass('d-none');
  }
  editContact() {
    console.log(this);
    const list = this.storage.get('contactsList');
    for (let k = 0; k < list.length; k++) {
      const contact = list[k];
      if (this.model.id === contact.id) {
        console.log('found');
        list[k] = this.model;
      }
    }
    this.storage.set('contactsList', list);
    this.contactsListNew = this.storage.get('contactsList');
  }
  showList() {
    setTimeout(function() {
      $('.form-div').addClass('d-none');
      $('.table-div').removeClass('d-none');
    }, 500);
  }
  ngOnInit() {
    this.contactsListNew = this.storage.get('contactsList');
  }

}
