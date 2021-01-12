import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import { AdminInfo } from '../model_classes/admin-info';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  verifyLogin(login: AdminInfo): Observable<AdminInfo>  {
    console.log(login);
    let url = "http://localhost:8086/loginAdmin";
   return this.http.post<AdminInfo>(url, login); 
  }

  getCustomerDetails(id: number) : Observable<any> {
    let url = 'http://localhost:8080/viewPending/'+id;
     return this.http.get<any>(url); 
  }


}