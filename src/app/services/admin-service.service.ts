import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import { AdminInfo } from '../model_classes/admin-info';
import { Customerinfo } from '../model_classes/customerinfo';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  verifyLogin(login: AdminInfo): Observable<any>  {
    console.log(login);
    let url = "http://localhost:8086/loginAdmin";
   return this.http.post<any>(url, login); 
  }

  getPendingById(id) : Observable<any> {
    let url = 'http://localhost:8086/viewPending/'+id;
     return this.http.get<any>(url); 
  }

  getAcceptedCutomers():Observable<any>{
    let url='http://localhost:8086/viewAccepted';
    return this.http.get<any>(url);
  }

  getAcceptedById(id) : Observable<any> {
    let url = 'http://localhost:8086/viewAccepted/'+id;
     return this.http.get<any>(url); 
  }

  getPending():Observable<any>{
    let url='http://localhost:8086/viewPending';
    return this.http.get<any>(url);
  }

  performAction(id,refid,action):Observable<any>{
    let url='http://localhost:8086/viewAction/'+id+'/'+refid+'/'+action;
    return this.http.get<any>(url);
  }

}