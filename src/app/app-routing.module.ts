import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceAdminComponent} from './service-admin/service-admin.component'
import { ServiceaddComponent } from './serviceadd/serviceadd.component';
import { ServicedeleteComponent } from './servicedelete/servicedelete.component';
import { ServiceupdateComponent } from './serviceupdate/serviceupdate.component';

const routes: Routes = [
  {path:'home',component:ServiceAdminComponent},
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'addService',component:ServiceaddComponent},
  {path:'updateService',component:ServiceupdateComponent},
  {path:'deleteService',component:ServicedeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
