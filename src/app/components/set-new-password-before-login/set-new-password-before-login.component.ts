import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-set-new-password-before-login',
  templateUrl: './set-new-password-before-login.component.html',
  styleUrls: ['./set-new-password-before-login.component.css']
})
export class SetNewPasswordBeforeLoginComponent implements OnInit {

form:FormGroup
loginPassword:String
transactionPassword:String

customerId=localStorage.initialId

  constructor(private http:UserService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    sessionStorage.clear();
    this.form = this.formBuilder.group({
      loginpassword: new FormControl(),
      
     transactionpassword: new FormControl(),
     confloginpassword: new FormControl(),
      
     conftransactionpassword: new FormControl(),
      
    }, 
      
    );
  }

  setPasswords(form){
    this.loginPassword = form.value.confloginpassword
    this.transactionPassword = form.value.conftransactionpassword
    this.http.setNewPasswords(this.customerId,this.loginPassword,this.transactionPassword).subscribe(response=>{
      if(response.status=='SUCCESS'){
        alert(response.message)
        localStorage.clear();
        this.router.navigate(['login']);
      }
      else{
        alert(response.message)
      }
    })
  }

}
