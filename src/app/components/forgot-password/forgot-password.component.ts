import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  
  loginForm: FormGroup;
  

  error_messages = {
    'id': [
      { type: 'required', message: 'User Id is required.' },
    ],
    'OTP': [
      { type: 'required', message: 'OTP is required.' },
      { type: 'minlength', message: 'OTP length.' },
      { type: 'maxlength', message: 'OTP length.' },
    ],
    
  }

  constructor(
    public formBuilder: FormBuilder
  //  private http: HttpClient,private router: Router,
   // private service:ConnectionService
  ) {
    
      
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(6)
      ])),
      
      
      OTP: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        
      ])),
    },
    );
    
    // { 
    //   validators: this.password.bind(this)
    // });
  }

  
}
