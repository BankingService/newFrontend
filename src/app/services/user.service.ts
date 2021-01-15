import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model_classes/register';
import { UserLogin } from '../model_classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  verifyUserLogin(login): Observable<any>  {
    let url = "http://localhost:8086/userLogin";
   return this.http.post<any>(url, login); 
  }


  registerUser(register: Register): Observable<any>  {
    console.log(register);
    let url = "http://localhost:8086/register/";
   return this.http.post<any>(url, register); 
  }

  verifyProfile(profilepass,customerID): Observable<any>  {
   // console.log(login);
    let url = "http://localhost:8086/userLogin";
   return this.http.post<any>(url,profilepass ); 
  }


  viewProfileById(id): Observable<any>  {
    let url = "http://localhost:8086/viewProfileDetails/"+id;
   return this.http.post<any>(url, id); 
  }

  editDetails(customerInfo): Observable<any>  {
    let url = "http://localhost:8086/editCustomerDetails/";
   return this.http.post<any>(url,customerInfo); 
  }
  
  setNewPasswords(id,loginPassword,transactionPassword):Observable<any>{
    let url = "http://localhost:8086/setnewpassword/"+id+"/"+loginPassword+"/"+transactionPassword;
    return this.http.get<any>(url);
  }
}
