import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'backend/services/appointment/appointment.service';
declare function swipe(): void
declare function FilterkeyWord(): void
declare function classement(): void
declare function FilterkeyWord2(): void
@Component({
  selector: 'app-appointment-admin',
  templateUrl: './appointment-admin.component.html',
  styleUrls: ['./appointment-admin.component.css']
})
export class AppointmentAdminComponent implements OnInit {
  app: any = {}
  appId: any = {}
  currentDate!: string
  p: any
  lengthId: number = 0
  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    swipe()
    FilterkeyWord()
    classement()
    FilterkeyWord2()

    this.appointmentService.getAppointment().subscribe(
      (data) => {
        this.app = data.app
        for (let i = 0; i < this.app.length; i++) {
          if (this.app[i].date == this.currentDate) {
            this.appId = this.app[i]
            console.log('here', this.appId);
            
          }
          if (this.app[i].valide == 'attente!') {
            this.lengthId++
          }
        }
      }
    )
    this.currentDate = this.formatDate(new Date());
  }
  formatDate(date: Date): string {
    const month = date.getMonth() + 1; // Get month (0-based index)
    const day = date.getDate(); // Get day
    const year = date.getFullYear(); // Get full year

    // Format with leading zeros for month and day if necessary
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    const formattedDay = day < 10 ? `0${day}` : `${day}`;

    return `${formattedMonth}-${formattedDay}-${year}`;
  }
  editValide(id: any) {
    this.router.navigate([`confirmation/${id}`])
  }

  deleteApp(id: any) {
    this.appointmentService.deleteAppointment(id).subscribe(
      (data) => {
        alert(data.message)
      }
    )
  }

  editDoctor(id:any){
    this.router.navigate([`edit-doctor/${id}`])
  }
  
}


