import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {
  details = {
    "Transaction ID" : 12345,
    "Mode": "RTGS",
    "Paid To Account":54300010024432,
    "From Account":54300010026643,
    "Amount":10000,
    "Date": "12-10-2100",
    "Remarks": "Enjoy!!"
  }
  constructor( ) { 
  }

  ngOnInit() {
  }
getTransactionDetails(customerId){

  }
}
