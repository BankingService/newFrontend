import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  form:FormGroup;
  constructor(private router:Router,private transaction:TransactionstatementService) { }

  ngOnInit() {
    this.form = new FormGroup({
      fromdate: new FormControl(),
      todate: new FormControl()
      
   });
  }

  onTransactionStatementRequest(formdata){
    this.transaction.createTransactionStatementRequest(formdata.value.fromdate,formdata.value.todate).subscribe((data:{})=>{
      
    })
  }

}
