import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {

  
    form: FormGroup;
  
    error_messages = {
      'accNumber': [
        { type: 'required', message: 'Account Number is required.' }
      ],
  
  
      'otp': [
        { type: 'required', message: 'OTP is required.' },
        { type: 'minlength', message: 'Enter 4 digit OTP' },
        { type: 'maxlength', message: 'Enter 4 digit OTP' }
       
      ],
      
    }  

    constructor(public formBuilder: FormBuilder,) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
        accNumber: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8),
          Validators.pattern('[0-9]+')
          
        ])),
        
       otp: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('[0-9]+')
          
        ])),
        
      }, 
        
      );
  }

}
