import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;


  error_messages = {
    'accno': [
      { type: 'required', message: 'Account Number is required.' },
      { type: 'required', message: 'Account Number must be of 8 digit' }
    ],

    'otp': [
      { type: 'required', message: 'OTP is required.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'required', message: 'password length must be of 6 char' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password not matched' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ],
    'tpassword': [
      { type: 'required', message: 'password is required' },
      { type: 'required', message: 'password length must be of 4 char' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ],
    'tcconfirmpassword': [
      { type: 'required', message: 'password not matched' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ],
    'profilePassword': [
      { type: 'required', message: 'password is required' },
      { type: 'required', message: 'password length must be of 4 char' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ],
    'confirmProfilePassword': [
      { type: 'required', message: 'password required' },
      { type: 'compare', message: 'password not matched' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' },
      { type: 'pattern', message: 'password must consist one special character,one alphabet and one numeric' }
    ]
  }

  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      accno: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)

      ])),
      otp: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      tpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      tcconfirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      profilePassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])),
      confirmProfilePassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
       RxwebValidators.compare({fieldName:'profilePassword'})
      ]))
    //  RxwebValidators.compare({fieldName:'profilePassword'})
      // ])),

      
     //   validators: this.password.bind(this),


      }
    );
  }


  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: confirmPassword } = formGroup.get('confirmpassword');
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }
  // passwor(formGroup: FormGroup) {
  //   const { value: tpassword } = formGroup.get('tpassword');
  //   const { value: tcconfirmPassword } = formGroup.get('tcconfirmpassword');
  //   return tpassword === tcconfirmPassword ? null : { passwordNotMatch: true };
  // }
  

  Registration() {

  }
}

export function checkvalue(c:AbstractControl) {
  if(!c.get('password').value || !c.get('confirmpassword')){
    return null;
  }
  if(c.get('password').value==c.get('confirmpassword').value){
    return null;
  }
  else{
    return 1;
  }
  
}
