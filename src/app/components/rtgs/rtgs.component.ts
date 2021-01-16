import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/dtoClass/transaction';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {
  form1: FormGroup;
  transactionRequest:Transaction;
  flag:boolean = false;
  fromAccountNo:string[]=[sessionStorage.getItem('accountNumber')];
  toAccountNo:any = [];
  msg:string;
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
     alert(data);
      this.toAccountNo.push(data);
    })
  }
  setFlag(){
    this.getOtp();
    this.flag = true;
  }
  transactionrequest(form2){
    if(this.otpMessage==form2.value.otp){
   
    this.transactionRequest=new Transaction(form2.value.fromAccount,form2.value.toAccount,form2.value.amount,2,
      form2.value.transactionPwd ,form2.value.remark,sessionStorage.getItem('customerId'));

  
    this.transaction.createTransactionRequest(this.transactionRequest).subscribe((data:{}) =>
      {  
           this. msg=JSON.stringify(data);
           
           sessionStorage.setItem('data',JSON.stringify(data));
         this.route.navigate(['transsuccess']);
         })
        }
        else{
          alert("invalid otp");
          this.route.navigate(['rtgs']);
        }

      
  }
  
  getOtp(){
    this.transaction.getTransactionOtp(sessionStorage.getItem('customerId')).subscribe(response=>{
      
     this.otpMessage=response.message
     alert(this.otpMessage)
      })
  }
 
}
