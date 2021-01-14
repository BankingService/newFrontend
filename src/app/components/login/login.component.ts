import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model_classes/user-login';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

form: FormGroup;
customerId:string="hii there";
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

constructor(public formBuilder: FormBuilder,private router:Router, private service:UserService) { }

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
login:UserLogin
message:string

userlogin(form){
  this.login = new UserLogin(form.value.customerId, form.value.loginPassword)
  console.log(this.login)

  this.service.verifyUserLogin(this.login).subscribe(response =>
    {  alert(JSON.stringify(response));
       console.log(response)
       if(response.status=='SUCCESS'){
         let customerId = response.customerId;
         let accountNumber = response.accountNumber;
         this.message=response.message;
         sessionStorage.setItem('customerId', String(customerId));
         sessionStorage.setItem('accountNumber', String(accountNumber));
       this.router.navigate(['accountsummary']);
       }
       else
       this.message = response.message;
       alert(this.message)
     })
}
}
