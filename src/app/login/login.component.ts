import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { EtudiantService } from '../http/etudiant.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  x:any

  constructor(private fb: FormBuilder, private etudiantService:EtudiantService) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  })


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    const etudiant = this.loginForm.value;
    this.x=this.etudiantService.login(etudiant.email,etudiant.password);
    console.log(this.x);
    // console.log(this.loginForm.value);
  }

}
