import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchivesService {
archiveUrl = 'http://localhost:3000/archive'
  constructor(private httpClient:HttpClient) { }

  archives(us:any){
    return this.httpClient.post<{message:any}>(`${this.archiveUrl}/archives`, us)
  }

  getArchive(){
    return this.httpClient.get<{findedA:any}>(`${this.archiveUrl}`)
  }

  getArchiveId(id:any){
    return this.httpClient.get<{findedId:any}>(`${this.archiveUrl}/${id}`)
  }

  editArchive(transfert:any){
    return this.httpClient.put<{message:any}>(`${this.archiveUrl}/${transfert._id}`, transfert)
  }
}
