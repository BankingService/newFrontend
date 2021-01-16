import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from '@rxweb/reactive-form-validators';

import { Transaction } from 'src/app/dtoClass/transaction';

import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {
  form1: FormGroup;
  transactionRequest:Transaction;
  flag:boolean = false;
  fromAccountNo:string[]=[sessionStorage.getItem('accountNumber')];
  toAccountNo:any = [] ;
  msg:string;
  ImpsNumber:number=3;
  otpMessage:string;

  constructor(private route:Router,private transaction:TransactionstatementService) { }

  ngOnInit() {
    this.form1 = new FormGroup({
      fromAccount: new FormControl('', [Validators.required]),
      toAccount:  new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      otp: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      transactionPwd:new FormControl(''),
      remark:new FormControl('')
    })
    this.transaction.createNoOfBeneficiariesRequest(sessionStorage.getItem('customerId')).subscribe((data:{})=>{
      alert(JSON.stringify(data));
      this.toAccountNo.push(data);
    })
  }
  setFlag(){
    this.getOtp();
    this.flag = true;
  }
  transactionrequest(form2){
    if(this.otpMessage==form2.value.otp){
    // let date=new Date();
    // var dd = String(date.getDate()).padStart(2, '0');
    // var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = date.getFullYear();
    // var hr =String (date.getHours()).padStart(2, '0');
    // var min =String(date.getMinutes()).padStart(2, '0');
    // var sec=String(date.getSeconds()).padStart(2, '0');
    // var milsec=String(date.getMilliseconds()).padStart(3, '0');
    // let datevalue=String(yyyy+"-"+mm+"-"+dd+"T"+hr+":"+min+":"+sec+"."+milsec);
   // alert(datevalue);
    // fromDate":"2017-01-13T17:09:42.411",
    //alert(form2.value.fromAccount+form2.value.toAccount);
    this.transactionRequest=new Transaction(form2.value.fromAccount,form2.value.toAccount,
      form2.value.amount,this.ImpsNumber,form2.value.transactionPwd ,form2.value.remark,sessionStorage.getItem('customerId'));
      alert(JSON.stringify(this.transactionRequest));
   // alert(JSON.stringify(this.transactionRequest));
    this.transaction.createTransactionRequest(this.transactionRequest).subscribe((data:{}) =>
      {  //alert(JSON.stringify(response));
        console.log(JSON.stringify(data));
        this. msg=JSON.stringify(data);
        
        sessionStorage.setItem('data',JSON.stringify(data));
          //  sessionStorage.balance=response.updatedBalance;
          //  alert("updated:"+sessionStorage.balance)
         this.route.navigate(['transsuccess']);
         })
        }

      
  }
  
  getOtp(){
    this.transaction.getTransactionOtp(sessionStorage.getItem('customerId')).subscribe(response=>{
      alert(JSON.stringify(response))
     this.otpMessage=response.message
     alert(this.otpMessage)
      })
  }
 
}
