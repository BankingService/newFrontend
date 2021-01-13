import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customerdets:any=[]
  constructor( private service:AdminServiceService) { }


 loadPending(){
 // this.service.getPendingById().subscribe((data: {}) => { this.customerdets = data})
  }
   adminName:string
  ngOnInit() {
    this.loadPending();
  }
}
