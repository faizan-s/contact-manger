import { StorageServiceModule } from 'angular-webstorage-service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmContactstableComponent } from './cm-contactstable/cm-contactstable.component';
import { CmContainerComponent } from './cm-container/cm-container.component';
import { CmCreatecontactComponent } from './cm-createcontact/cm-createcontact.component';
import { CmDeletecontactComponent } from './cm-deletecontact/cm-deletecontact.component';
import { CmEditcontactComponent } from './cm-editcontact/cm-editcontact.component';
import { CmListcontactsComponent } from './cm-listcontacts/cm-listcontacts.component';
import { CmSidebarComponent } from './cm-sidebar/cm-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CmSidebarComponent,
    CmContainerComponent,
    CmListcontactsComponent,
    CmCreatecontactComponent,
    CmEditcontactComponent,
    CmDeletecontactComponent,
    CmContactstableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule,
    AppRoutingModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
