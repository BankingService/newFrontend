import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
 msge=
 {
   "test":"12-10-2100"
}
 msge1:{};

 
  
  constructor() { }

  ngOnInit() {
      this.msge.test=JSON.stringify(this.msge);
      this.msge.test=JSON.stringify(this.msge);
      this.msge.test=JSON.stringify(this.msge);
      alert(JSON.stringify(this.msge));
  }

}
