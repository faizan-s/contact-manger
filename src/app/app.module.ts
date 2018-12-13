import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { CmSidebarComponent } from './cm-sidebar/cm-sidebar.component';
import { CmContainerComponent } from './cm-container/cm-container.component';
import { AppRoutingModule } from './/app-routing.module';
import { CmListcontactsComponent } from './cm-listcontacts/cm-listcontacts.component';
import { CmCreatecontactComponent } from './cm-createcontact/cm-createcontact.component';
import { CmEditcontactComponent } from './cm-editcontact/cm-editcontact.component';
import { CmDeletecontactComponent } from './cm-deletecontact/cm-deletecontact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CmContactstableComponent } from './cm-contactstable/cm-contactstable.component';

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
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
