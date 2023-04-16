import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from 'src/app/http/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  etudiants!:Etudiant[];
  form:FormGroup;
  constructor(private formBuilder: FormBuilder, private etudiantService:EtudiantService) { 
    console.log("hhh");
    this.form = formBuilder.group(
      {
        nom: ['', Validators.required],
        prenom:['', Validators.required],
        age: ['', Validators.required],
        cin: ['', Validators.required],
        filiere: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("submit", this.form.value)
    if (this.form.valid) {
      const etudiant = this.form.value;
      console.log("etudiants ", this.etudiants)
      this.etudiantService.add({ 
        nom:etudiant.nom,
        prenom:etudiant.prenom,
        cin:etudiant.cin,
        age:etudiant.age,
        filiere:etudiant.filiere,
      }).subscribe(data => {
       console.log("data", data)});
       this.etudiantService.getAll().subscribe({
        next :(data)=>{
          this.etudiants=data;
          console.log(this.etudiants)
        }
      });
    }
  }
}
