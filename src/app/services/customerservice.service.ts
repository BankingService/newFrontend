import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customerinfo } from '../model_classes/customerinfo';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  apiUrl:string='http://localhost:8086/';
  constructor(private http:HttpClient) {
   
   }
   createCustomerRequest(customerReqest):Observable<Customerinfo>{
     alert(customerReqest);
    return this.http.post<Customerinfo>(this.apiUrl+'customerInfo/',customerReqest);
  }
}