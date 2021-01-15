import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
 
  customerInfo:any;

  customerId = sessionStorage.customerId;
  customerName = sessionStorage.customerName;
  accountNumber = sessionStorage.accountNumber;
  ifsc = sessionStorage.ifsc;
  balance = sessionStorage.balance;
  constructor() { }

  ngOnInit() {      
  }

}
