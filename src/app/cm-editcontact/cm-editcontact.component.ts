import { Component, OnInit,Inject } from '@angular/core';
import { Contact }   from '../contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { CmCreatecontactComponent } from '../cm-createcontact/cm-createcontact.component';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cm-editcontact',
  templateUrl: './cm-editcontact.component.html',
  styleUrls: ['./cm-editcontact.component.css']
})
export class CmEditcontactComponent implements OnInit {
  
  contactsListNew= [];
  statusList= ["Active","Inactive"];
  submitted = false;
  model = new Contact();
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,  private router: Router) { 
    //this.contactsListNew = this.storage.get('contactsList');
  }
  onSubmit() { this.submitted = true; }
  updateContact(ctx){
    console.log(this.storage.get('contactsList'))
    console.log(ctx);
    this.model = ctx;
    $(".form-div").removeClass("d-none");
    $(".table-div").addClass("d-none");
    //this.router.navigate(["/editcontact/",{phone : 8787989}])
    //updateView();
  }
  editContact () {
    console.log(this);
    var list = this.storage.get('contactsList');
    for(var k = 0; k < list.length;k++){
      let contact = list[k];
      if(this.model.id == contact.id ){
        console.log("found");
        list[k] = this.model;
      }
    }
   this.storage.set('contactsList',list);
   this.contactsListNew = this.storage.get('contactsList');
  }
  showList(){
    setTimeout(function(){
      $(".form-div").addClass("d-none");
      $(".table-div").removeClass("d-none");
    },500);
  }
  ngOnInit() {
    this.contactsListNew = this.storage.get('contactsList');
  }

}
