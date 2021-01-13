import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: FormGroup;
error_messages = {
  'id': [
    {  type: 'required', message: 'User Id is required.' }
  ],


  'password': [
    { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length too small' },
      { type: 'maxlength', message: 'Exceeds password length limit' },
      { type: 'pattern', message:'Password must consist one special character,one alphabet and one numeric'}
   
  ],
  
}  

constructor(public formBuilder: FormBuilder,private router:Router) { }

ngOnInit() {
  this.form = this.formBuilder.group({
    id: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8)
      
    ])),
    
   password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')
      
    ])),
    
  }, 
    
  );
}
 //timer= setTimeout(() => alert("say hii"), 1000);

changeredir(){
  //alert("hi there");
  this.router.navigate(['accountsummary']);
}
}
