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
  createTransactionStatementRequest(fromDate, toDate): Observable<TransactionStatement> {
    return this.http.get<TransactionStatement>(this.apiUrl + 'customerInfo/' + fromDate + '/' + toDate);
  }

  createTransactionRequest(transactionStatement): Observable<TransactionStatement> {
    return this.http.post<TransactionStatement>(this.apiUrl + 'customerInfo/', transactionStatement);
  }

  createBeneficiaryRequest(customerId): Observable<Beneficiary> {
    return this.http.get<Beneficiary>(this.apiUrl + 'customerInfo/'+customerId);
  }

}