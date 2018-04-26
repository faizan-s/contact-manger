import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmListcontactsComponent } from './cm-listcontacts/cm-listcontacts.component';
import { CmCreatecontactComponent } from './cm-createcontact/cm-createcontact.component';
import { CmEditcontactComponent } from './cm-editcontact/cm-editcontact.component';
import { CmDeletecontactComponent} from './cm-deletecontact/cm-deletecontact.component';
const routes: Routes = [
  { path: '', redirectTo: '/listcontacts', pathMatch: 'full' },
  { path: 'createcontact', component: CmCreatecontactComponent },
  { path: 'listcontacts', component: CmListcontactsComponent },
  { path: 'editcontact', component: CmEditcontactComponent },
  { path: 'editcontact/phone', component: CmCreatecontactComponent },
  { path: 'deletecontact', component: CmDeletecontactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
