import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-set-new-password-before-login',
  templateUrl: './set-new-password-before-login.component.html',
  styleUrls: ['./set-new-password-before-login.component.css']
})
export class SetNewPasswordBeforeLoginComponent implements OnInit {

form:FormBuilder
loginPassword:String
transactionPassword:String

  constructor() { }

  ngOnInit() {
  }

  setPasswords(form){
    this.loginPassword = form.value.confloginpassword
    this.transactionPassword = form.value.conftransactionpassword
    
  }

}
