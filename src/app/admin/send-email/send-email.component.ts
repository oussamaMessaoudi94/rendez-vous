import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'backend/services/appointment/appointment.service';
declare function  sendEmail() :void
@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
id:any
finded:any={}
  constructor(private appointmentService:AppointmentService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    sendEmail()

    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.appointmentService.getAppointmentById(this.id).subscribe(
      (data)=>{
        this.finded = data.finded
      }
    )
  }

}
