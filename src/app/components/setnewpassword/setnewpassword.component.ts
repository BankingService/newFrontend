import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.css']
})
export class SetnewpasswordComponent implements OnInit {

  form:FormGroup;
  loginPassword:String
  transactionPassword:String

  constructor(private http:UserService,private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      loginpassword: new FormControl(),
      confloginpassword: new FormControl(),
      transactionpassword: new FormControl(),
      conftransactionpassword: new FormControl()
   });
  }

  customerId=sessionStorage.customerId

  passwordChange(form){
    this.loginPassword = form.value.confloginpassword
    this.transactionPassword = form.value.conftransactionpassword
    this.http.setNewPasswords(this.customerId,this.loginPassword,this.transactionPassword).subscribe(response=>{
      if(response.status=='SUCCESS'){
        alert(response.message)
        this.router.navigate(['accountsummary']);
      }
      else{
        alert(response.message)
      }
    })
  }
}
