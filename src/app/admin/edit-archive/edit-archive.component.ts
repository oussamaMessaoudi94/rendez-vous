import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ArchivesService } from 'backend/services/archives/archives.service';

@Component({
  selector: 'app-edit-archive',
  templateUrl: './edit-archive.component.html',
  styleUrls: ['./edit-archive.component.css']
})
export class EditArchiveComponent implements OnInit {
id:any
findedId:any={}
datee:any
  constructor(private archiveService:ArchivesService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.archiveService.getArchiveId(this.id).subscribe(
      (data)=>{
        this.findedId = data.findedId
      }
    )
    this.datee = Date()
  }


  valideArchive(id:any){
    this.archiveService.editArchive(this.findedId).subscribe(
      (data)=>{
        console.log(data.message);
        
      }
    )
  }
}
