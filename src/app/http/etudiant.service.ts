import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get("http://localhost:8080/etudiant");
  }
  add(etudiant :any){
    return  this.http.post("http://localhost:8080/etudiant/new",etudiant);
  }
  login(email :any,password:any){
    return  this.http.post("http://localhost:8080/user",email,password);
  }

}
