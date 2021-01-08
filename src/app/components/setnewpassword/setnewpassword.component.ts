import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.css']
})
export class SetnewpasswordComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      loginpassword: new FormControl(),
      confloginpassword: new FormControl(),
      transactionpassword: new FormControl(),
      conftransactionpassword: new FormControl()
   });
  }

  passwordchange(){
   
  }
}
