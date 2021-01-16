import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  apiUrl:string='http://localhost:8086/';
  headers=new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http:HttpClient) {
    // http://localhost:8086/createAccount/
   }
   createCustomerRequest(customerReqest):Observable<any>{
     console.log(JSON.stringify(customerReqest));
    return this.http.post<any>(this.apiUrl+'createAccount/',customerReqest);
    
  }
  picUpload(formData: FormData) : Observable<any> {
    let url = "http://localhost:8086/createAccount/docs/";
   return this.http.post<any>(url, formData); 
  }

  verifyEmailOtp(emailId) : Observable<any> {
    let url = 'http://localhost:8086/verifyEmailOtp/'+emailId;
     return this.http.get<any>(url); 
  }
  
}
