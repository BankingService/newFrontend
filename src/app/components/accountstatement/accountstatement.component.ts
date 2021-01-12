import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      fromdate: new FormControl(),
      todate: new FormControl()
      
   });
  }

  getTransactionStatement(){
    
  }

}
