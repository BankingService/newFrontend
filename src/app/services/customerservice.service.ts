import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customerinfo } from '../model_classes/customerinfo';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  apiUrl:string='http://localhost:8086/';
  headers=new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http:HttpClient) {
    // http://localhost:8086/customerInfo/
   }
   createCustomerRequest(customerReqest):Observable<any>{
     console.log(JSON.stringify(customerReqest));
    return this.http.post<any>(this.apiUrl+'customerInfo/',customerReqest);
  }
  // getReferenceId(): Observable<any>{
  //   return this.http.get<Customerinfo>(this.apiUrl+'customerInfo/');
  // }

}
