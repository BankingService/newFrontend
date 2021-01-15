import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beneficiary } from '../model_classes/beneficiary';
import { TransactionStatement } from '../model_classes/transaction-statement';

@Injectable({
  providedIn: 'root'
})
export class TransactionstatementService {
  apiUrl: string = 'http://localhost:8086/';
  //headers=new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient) {
    // http://localhost:8086/customerInfo/
  }
  createTransactionStatementRequest(statement): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'accountStatement/',statement);
  }

  createTransactionRequest(transactionStatement): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'transact/', transactionStatement);
  }

  createBeneficiaryRequest(beneficiary): Observable<any> {
    alert(beneficiary);
    return this.http.post<any>(this.apiUrl + 'addBeneficiary/',beneficiary);
  }

  createNoOfBeneficiariesRequest(customerId):Observable<any>{
    return this.http.get<any>(this.apiUrl+'viewBeneficiaries/'+customerId);
  }

  getBeneficiaryOtp(customerId):Observable<any>{
    return this.http.get<any>(this.apiUrl+'addBeneficiaryOtp/'+customerId);
  }



}