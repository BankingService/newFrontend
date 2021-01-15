import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { json } from '@rxweb/reactive-form-validators';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';
import { CheckApplicationStatusComponent } from '../check-application-status/check-application-status.component';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  form1: FormGroup;
  flag:boolean = false;
  beneficiary: any[] = [];
  constructor( private service : TransactionstatementService) { }

  setFlag(){
    console.log("hello")
    this.flag = true;
  }
  ngOnInit() {
    this.form1 = new FormGroup({
      accountNo: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      reAccountNo:  new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      ifsc: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+[0-9]*")]),
      name: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]),
      nickName: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z]+")]),
      otp: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    })
  }

  customerId:any
  otp:any

  addBeneficiary(f){
    this.beneficiary.push(f.value);
    console.log("this is the userList: "+this.beneficiary.toString())
    console.log(JSON.stringify(this.beneficiary));
    this.customerId=sessionStorage.customerId

    this.service.createBeneficiaryRequest(f,this.customerId).subscribe(response =>{

      alert(JSON.stringify(response))
       this.otp = response.otp;

    }
      
      )
    
  }

  getOtp(){
    
  }


  checkOtp(formOtp){
 if(formOtp == this.otp){

 }

  }


}