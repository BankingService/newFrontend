import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model_classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  verifyUserLogin(login: UserLogin): Observable<any>  {
    console.log(login);
    let url = "http://localhost:8086/userLogin";
   return this.http.post<any>(url, login); 
  }
}
