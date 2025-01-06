import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'backend/services/appointment/appointment.service';
import { ArchivesService } from 'backend/services/archives/archives.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  id:any
  finded:any={}
  noteForm!:FormGroup
  constructor(private appointmentService:AppointmentService, private activateRoute:ActivatedRoute, private router:Router, private fb:FormBuilder, 
    private archiveService:ArchivesService
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id')
    this.appointmentService.getAppointmentById(this.id).subscribe(
      (data)=>{
        this.finded = data.finded
      }
    )

    this.noteForm = this.fb.group({
      notes:['']
    })
  }
 valideNotes(id:any){
  let p = {nameP:"", email:"", number:"", date:"", time:"", notes:"" }
  p.nameP = this.finded.nameP,
  p.email = this.finded.email,
  p.number = this.finded.number,
  p.date = this.finded.date,
  p.time = this.finded.time,
  p.notes = this.noteForm.value.notes
  this.archiveService.archives(p).subscribe(
    (data)=>{
      console.log(data.message);
      
    }
  )
 }
}
