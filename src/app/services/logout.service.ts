import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) {}
   
  lastLogin(custId): Observable<any>  {
    
    let url = "http://localhost:8086/userLogin/logout/"+custId;
   return this.http.get<any>(url); 
  }
  lastLocation(ipadd): Observable<any>  {
    
    let url = "https://www.melissa.com/v2/lookups/iplocation/ip/"+ipadd+"?fmt=json&id=";
   return this.http.get<any>(url); 
  }
}
