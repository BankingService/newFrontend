import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionStatement } from 'src/app/model_classes/transaction-statement';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {
  transactionRequest:TransactionStatement;
  form1: FormGroup;
  flag:boolean = false;

  constructor() { }

  ngOnInit() {
    this.form1 = new FormGroup({
      fromAccount: new FormControl('', [Validators.required]),
      toAccount:  new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      date: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    })
  }
  setFlag(){
    this.flag = true;
  }

}
