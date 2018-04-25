import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact }   from '../contact';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cm-createcontact',
  templateUrl: './cm-createcontact.component.html',
  styleUrls: ['./cm-createcontact.component.css']
})
export class CmCreatecontactComponent implements OnInit {
  submitted = false;
  model = new Contact();
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private router: Router) { }
  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }
  newContact(){
     console.log(this.model.fname)
     var contactsList = this.storage.get('contactsList');
     this.model.id = new Date().valueOf().toString();
     this.model.status = "Active";
     contactsList.push(this.model);
     this.storage.set('contactsList',contactsList);
  }
}
