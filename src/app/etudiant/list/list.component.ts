import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/http/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  etudiant!: Etudiant[];
  constructor(
    private etudiantService:EtudiantService
    ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.etudiantService.getAll().subscribe({
      next :(data)=>{
        this.etudiant=data;
        console.log(this.etudiant);
      }
    })
  }

}
