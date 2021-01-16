import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpserviceService } from 'src/app/services/otpservice.service';


@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {

  
  loginForm: FormGroup;
  form: FormGroup;
  otp : any;
  
  flag:boolean=false;
  error_messages = {
    'id': [
      { type: 'required', message: 'Account Number is required.' },
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
    sessionStorage.clear();
    this.loginForm = this.formBuilder.group({
      id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(10)
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
  customerId:any;
  
  getotp(id){
    this.flag=true;
    console.log(id);
    
    this.customerId=id;
    
    this.service.getOtpByAccountNumber(id).subscribe(response => {
      alert(response.message)
      this.message = response.message;})
  }

  verifyotp(otp){
    console.log(otp)
    if(otp==this.message){
        alert("verified");
        this.service.verifyOtpByAccountNumber(this.customerId).subscribe(response=>{
          alert(response.message)
          this.message=response.message
        })
        this.router.navigate(['login']);
      }
      else{
        alert("invalid otp")
      }
    
  }


}
