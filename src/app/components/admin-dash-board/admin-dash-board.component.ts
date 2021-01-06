import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
   accounts= {
       123453:98765,
       676767:23213
  }
  constructor() { }

  ngOnInit() {
  }

}
