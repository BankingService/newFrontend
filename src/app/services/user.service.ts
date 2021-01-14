import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model_classes/register';
import { UserLogin } from '../model_classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  verifyUserLogin(login): Observable<any>  {
    let url = "http://localhost:8086/userLogin";
   return this.http.post<any>(url, login); 
  }


  registerUser(register: Register): Observable<any>  {
    console.log(register);
    let url = "http://localhost:8086/register/";
   return this.http.post<any>(url, register); 
  }

  verifyProfile(profilepass,customerID): Observable<any>  {
   // console.log(login);
    let url = "http://localhost:8086/userLogin";
   return this.http.post<any>(url,profilepass ); 
  }
}
