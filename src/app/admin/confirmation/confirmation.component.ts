import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'backend/services/appointment/appointment.service';
import { find, findIndex } from 'rxjs';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
id:any
finded:any={}
  constructor(private appointmentService:AppointmentService, private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.appointmentService.getAppointmentById(this.id).subscribe(
      (data)=>{
        this.finded = data.finded
      }
    )
  }

  validate(id:any){
    this.appointmentService.putAppointment(this.finded).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
    this.router.navigate([`sendEmail/${id}`])
  }
}
