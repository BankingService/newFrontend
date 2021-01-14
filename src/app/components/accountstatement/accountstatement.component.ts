import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Transactiondatetime } from 'src/app/dtoClass/transactiondatetime';
import { TransactionStatement } from 'src/app/model_classes/transaction-statement';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {
  form: FormGroup;
  transactiondatetime: Transactiondatetime;
  transactionstatement:TransactionStatement[]=[];
  constructor(private router: Router, private transaction: TransactionstatementService) { }

  ngOnInit() {
    this.form = new FormGroup({
      fromdate: new FormControl(''),
      todate: new FormControl('')

    });
  }

  onTransactionStatementRequest(formdata) {

    let fromdate = formdata.value.fromdate;
    let todate = formdata.value.todate;
    fromdate = fromdate + "T00:00:00.001";
    todate = todate + "T23:59:59.999";
    this.transactiondatetime = new Transactiondatetime(fromdate, todate, sessionStorage.getItem('accountNumber'));
    //  this.transaction.createTransactionStatementRequest(this.transactiondatetime).subscribe((data:{})=>{
            // alert(data);
            // this.transactionstatement.push(data);
    //  })
  }

}
