import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ServiceAdminComponent } from './service-admin/service-admin.component';
import { ServiceaddComponent } from './serviceadd/serviceadd.component';
import {FormsModule} from '@angular/forms';
import { ServiceupdateComponent } from './serviceupdate/serviceupdate.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicedeleteComponent } from './servicedelete/servicedelete.component';
import { ServiceshowComponent } from './serviceshow/serviceshow.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    ServiceAdminComponent,
    ServiceaddComponent,
    ServiceupdateComponent,
    ServicedeleteComponent,
    ServiceshowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
