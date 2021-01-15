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
  otpmessage: any;
  constructor( private service : TransactionstatementService) { }

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
      this.beneficiary.push(f.value);
    console.log(JSON.stringify(this.beneficiary));
    this.service.createBeneficiaryRequest(f,this.customerId).subscribe(response => {
            alert(JSON.stringify(response))
    })
  }

  else{
    alert("incorrect otp")
  }
}
  getOtp(){
    this.service.getBeneficiaryOtp(this.customerId).subscribe(response=>{
    alert(JSON.stringify(response))
   this.otpmessage=response.message
   alert(this.otpmessage)
    })
    
  }


}