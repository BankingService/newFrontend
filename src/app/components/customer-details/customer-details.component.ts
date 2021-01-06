import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer= {
    "Title":"Mr.",
    "First Name":"Vivek",
    "Middle Name":"Singh",
    "Last Name":"Kushwah",
}
  constructor() { }

  ngOnInit() {
  }

}
