import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from '@rxweb/reactive-form-validators';
import { Beneficiary } from 'src/app/modelClass/beneficiary';
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
  beneficiary: Beneficiary
  otpmessage: any;
  constructor( private service : TransactionstatementService, private router:Router) { }

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

  customerId = sessionStorage.customerId

  addBeneficiary(f){
    if(f.value.otp == this.otpmessage){

      this.beneficiary = new Beneficiary(this.customerId, f.value.accountNo,f.value.name,
        f.value.nickName, f.value.ifsc)

        console.log(f.value.accountNo)

    console.log(JSON.stringify(this.beneficiary));
    this.service.createBeneficiaryRequest(this.beneficiary).subscribe(response => {
            alert(JSON.stringify(response))
    })
  }
  
}
  getOtp(){
    this.service.getBeneficiaryOtp(this.customerId).subscribe(response=>{
   this.otpmessage=response.message
   alert(this.otpmessage)
    })
    
  }


}