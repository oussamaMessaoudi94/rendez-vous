import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginInComponent } from './admin/login-in/login-in.component';
import { NavComponent } from './nav/nav.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { AppointmentAdminComponent } from './admin/appointment-admin/appointment-admin.component';
import { ConfirmationComponent } from './admin/confirmation/confirmation.component';
import { SendEmailComponent } from './admin/send-email/send-email.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditDoctorComponent } from './admin/edit-doctor/edit-doctor.component';
import { ArchiveComponent } from './admin/archive/archive.component';
import { EditArchiveComponent } from './admin/edit-archive/edit-archive.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    ServiceComponent,
    TakeAppointmentComponent,
    LoginInComponent,
    NavComponent,
    AcceuilComponent,
    NavAdminComponent,
    ContactAdminComponent,
    AppointmentAdminComponent,
    ConfirmationComponent,
    SendEmailComponent,
    EditDoctorComponent,
    ArchiveComponent,
    EditArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
