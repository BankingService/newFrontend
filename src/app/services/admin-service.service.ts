import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import { AdminInfo } from '../modelClass/admin-info';

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

  getAppStatus(id) : Observable<any> {
    let url = 'http://localhost:8086/checkStatus/'+id;
     return this.http.get<any>(url); 
  }

  getBlockedCuts() : Observable<any>{
    let url='http://localhost:8086/viewBlocked';
    return this.http.get<any>(url);
  }

  getBlockedById(id) : Observable<any> {
    let url = 'http://localhost:8086/viewBlocked/'+id;
     return this.http.get<any>(url); 
  }

  unblockAction(id,cid,action):Observable<any>{
    let url='http://localhost:8086/performAction/'+id+'/'+cid+'/'+action;
    return this.http.get<any>(url);
  }

}