import { Component, OnInit } from '@angular/core';
import { TransactionstatementService } from 'src/app/services/transactionstatement.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  num:any=[]
  flag:boolean=false;
  constructor(private noOfBeneficiaries:TransactionstatementService) { }

  ngOnInit(){
    alert("hello")
    this.noOfBeneficiaries.createNoOfBeneficiariesRequest(sessionStorage.getItem('customerId')).subscribe((data:{})=>{
      this.num.push(data);
      if(this.num.length==0){
        alert("hello2")
        this.flag=true;
      }
    })
  }


}
