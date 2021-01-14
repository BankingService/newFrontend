import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  fromAccountNo:string=sessionStorage.getItem('accountNumber');
  toAccountNo:any[] = [1111,222,333,44,55,6,76,878,79,87,44]  ;
  msg:string;
  

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
  }
  setFlag(){
    this.flag = true;
  }
  transactionrequest(form2){
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
      form2.value.amount,3,form2.value.transactionPwd ,form2.value.remark,form2.value.otp,sessionStorage.getItem('customerId'));

   // alert(JSON.stringify(this.transactionRequest));
    this.transaction.createTransactionRequest(this.transactionRequest).subscribe(response =>
      {  //alert(JSON.stringify(response));
           console.log(response);
           this. msg=response.message;
           this.showstatus()
         this.route.navigate(['transsuccess']);
         })

      
  }
  showstatus(){
    alert(this.msg);
  }
 
}
