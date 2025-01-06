import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
appointmentUrl = 'http://localhost:3000/appointments'
  constructor(private httpClient:HttpClient) { }

  appointment(user :any){
    return this.httpClient.post<{message:any}>(`${this.appointmentUrl}/appointment`, user)
  }

  getAppointment(){
    return this.httpClient.get<{app:any}>(`${this.appointmentUrl}`)
  }

  getAppointmentById(id:any){
    return this.httpClient.get<{finded:any}>(`${this.appointmentUrl}/${id}`)
  }

  putAppointment(transfert:any){
    return this.httpClient.put<{message:any}>(`${this.appointmentUrl}/${transfert._id}`, transfert)
  }

  deleteAppointment(id:any){
    return this.httpClient.delete<{message:any}>(`${this.appointmentUrl}/${id}`)
  }
}
