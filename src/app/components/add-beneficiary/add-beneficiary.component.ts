import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  form1: FormGroup;
  flag:boolean = false;
  beneficiary: any[] = [];
  constructor() { }

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

  addBeneficiary(f){
    this.beneficiary.push(f.value);
    console.log("this is the userList: "+this.beneficiary.toString())
    console.log(JSON.stringify(this.beneficiary));
  }
}