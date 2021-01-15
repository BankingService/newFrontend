import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Transactiondatetime } from 'src/app/dtoClass/transactiondatetime';
import { TransactionStatement } from 'src/app/model_classes/transaction-statement';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  form: FormGroup;
  transactiondatetime: Transactiondatetime;
  transactionstatement: any = [];

  error_messages = {

    'fromdate': [
      { type: 'required', message: 'Admin Id is required.' }
    ],

    'todate': [
      { type: 'required', message: 'todate is required.' }
    ],
  }

  constructor(private router: Router, private transaction: TransactionstatementService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({

      fromdate: new FormControl('', Validators.compose([
        Validators.required

      ])),

      todate: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  onTransactionStatementRequest(formdata) {

    let fromdate = formdata.value.fromdate;
    let todate = formdata.value.todate;
    fromdate = fromdate + "T00:00:00.001";
    todate = todate + "T23:59:59.999";
    this.transactiondatetime = new Transactiondatetime(fromdate, todate,  "11134563");//sessionStorage.getItem('accountNumber'));
    //  this.transaction.createTransactionStatementRequest(this.transactiondatetime).subscribe((data:{})=>{
    // alert(data);
    // this.transactionstatement.push(data);
    //  })

    this.transaction.createTransactionRequest(this.transactiondatetime).subscribe((data: {}) => {
      alert(JSON.stringify(data))
      this.transactionstatement.push(data);
    })
    // location from ip address
    // https://www.melissa.com/v2/lookups/iplocation/ip/223.182.242.158?fmt=json&id=
  }
}


