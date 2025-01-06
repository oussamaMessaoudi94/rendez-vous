import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'backend/services/appointment/appointment.service';
declare function generateCalendar():void
declare function time():void

@Component({
  selector: 'app-take-appointment',
  templateUrl: './take-appointment.component.html',
  styleUrls: ['./take-appointment.component.css']
})
export class TakeAppointmentComponent implements OnInit {
apointmentForm!:FormGroup
  constructor(private fb:FormBuilder, private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    generateCalendar(),
    time()

    this.apointmentForm = this.fb.group({
      nameP: ['', [Validators.required]],
      email: ['', [Validators.email]],
      number: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      valide:['attente!']
    })
  }

  apointment(x:any){
    if (!(this.apointmentForm.value.nameP) || (this.apointmentForm.controls['email'].errors?.['email']) || !(this.apointmentForm.value.number) || !(this.apointmentForm.value.date) || !(this.apointmentForm.value.time)) {
      alert('no oussama no')
    } else {
      this.appointmentService.appointment(this.apointmentForm.value).subscribe(
        (data)=>{
          console.log(data.message);
          location.replace('succes-rendez-vous')      
        }
      )
    }

  }




}
