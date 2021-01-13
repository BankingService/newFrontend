import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  customers:any=[]
  constructor( private service:AdminServiceService) { }


 loadPending(){
  this.service.getPending().subscribe((data: {}) => { this.customers = data})
  }
   adminName:string
  ngOnInit() {

    this.adminName = sessionStorage.getItem('adminName');
    this.loadPending();
  }

}
