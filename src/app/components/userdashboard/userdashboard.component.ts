import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  async logoutconfirm(){
    //let temp
    if(confirm("are you sure")){
      this.router.navigate(['login']);
    }
    
  }

}
