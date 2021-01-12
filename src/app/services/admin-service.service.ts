import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AdminInfo } from '../model_classes/AdminInfo';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  headers=new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  adminLogin(login: AdminInfo): Observable<any>  {
    let url = "http://localhost:8086/loginAdmin";
   return this.http.post(url, login); 
  }

  getCustomerDetails(id: number) : Observable<any> {
    let url = 'http://localhost:8080/viewPending/'+id;
     return this.http.get<any>(url); 
  }


}