import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {

  constructor(private http:HttpClient) { }

  getOtp(id):Observable<any>{
  let url = "http://localhost:8086/forgotpassword/"+id;
  return this.http.get<any>(url);
  }

  getOtpByAccountNumber(accNo):Observable<any>{
    let url = "http://localhost:8086/forgotUserIdOtpVerified/"+accNo;
    return this.http.get<any>(url);
  }
}
