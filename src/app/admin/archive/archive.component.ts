import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchivesService } from 'backend/services/archives/archives.service';
declare function swipe(): void
declare function FilterkeyWord(): void

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
p:any
findedA:any={}
  constructor(private archiveService:ArchivesService, private router:Router) { }

  ngOnInit(): void {
    swipe()
    FilterkeyWord()

    this.archiveService.getArchive().subscribe(
      (data)=>{
        this.findedA = data.findedA
      }
    )
  }

  editArchive(id:any){
    this.router.navigate([`edit-archive/${id}`])
  }
}
