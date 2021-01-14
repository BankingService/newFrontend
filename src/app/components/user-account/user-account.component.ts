import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  redirectTo()
  {
    this.router.navigate(['/userdashboard'])
  }
  redirectTo2()
  {
    this.router.navigate(['/changedetails'])
  }


}
