import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cm-listcontacts',
  templateUrl: './cm-listcontacts.component.html',
  styleUrls: ['./cm-listcontacts.component.css']
})
export class CmListcontactsComponent implements OnInit {
  contactsList = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.contactsList = this.storage.get('contactsList');
  }
  ngOnInit(): void {
  }
}
