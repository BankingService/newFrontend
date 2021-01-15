import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OtpserviceService } from 'src/app/services/otpservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  
  loginForm: FormGroup;
  form: FormGroup;
  otp : any;
  
  flag:boolean=false;
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
    public formBuilder: FormBuilder,private router:Router, private service: OtpserviceService
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
    },
    )

    this.form = this.formBuilder.group({
         
      OTP: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        
      ])),
    },);
    
    // { 
    //   validators: this.password.bind(this)
    // });
  }

  message: any;
  
  getotp(id){
    this.flag=true;
    console.log(id);
    let temp=id;
    sessionStorage.setItem('initialId',temp)
    this.service.getOtp(id).subscribe(response => {
      alert(response.message)
      this.message = response.message;})
  }

  verifyotp(otp){
    console.log(otp)
    if(otp==this.message){
        alert("verified");
        this.router.navigate(['setnewpasswordbeforelogin']);
      }
      else
      {
        alert("Invalid otp")
      }
    
  }

  
}
