import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';
import { LoginInComponent } from './admin/login-in/login-in.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { ContactAdminComponent } from './admin/contact-admin/contact-admin.component';
import { AppointmentAdminComponent } from './admin/appointment-admin/appointment-admin.component';
import { ConfirmationComponent } from './admin/confirmation/confirmation.component';
import { SendEmailComponent } from './admin/send-email/send-email.component';
import { EditDoctorComponent } from './admin/edit-doctor/edit-doctor.component';
import { ArchiveComponent } from './admin/archive/archive.component';
import { EditArchiveComponent } from './admin/edit-archive/edit-archive.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'contact', component:ContactComponent},
  {path:'service', component:ServiceComponent},
  {path:'appointment', component:TakeAppointmentComponent},
  {path:'login-doctor', component:LoginInComponent},
  {path:'acceuil', component:AcceuilComponent},
  {path:'contact-admin', component:ContactAdminComponent},
  {path:'appointment-admin', component:AppointmentAdminComponent},
  {path:'confirmation', component:ConfirmationComponent},
  {path:'confirmation/:id', component:ConfirmationComponent},
  {path:'sendEmail', component:SendEmailComponent},
  {path:'sendEmail/:id', component:SendEmailComponent},
  {path:'edit-doctor', component:EditDoctorComponent},
  {path:'edit-doctor/:id', component:EditDoctorComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'edit-archive', component:EditArchiveComponent},
  {path:'edit-archive/:id', component:EditArchiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
