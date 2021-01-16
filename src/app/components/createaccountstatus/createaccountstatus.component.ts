import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-createaccountstatus',
  templateUrl: './createaccountstatus.component.html',
  styleUrls: ['./createaccountstatus.component.css']
})
export class CreateaccountstatusComponent implements OnInit {

  reid:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    sessionStorage.clear();
    this.route.params.subscribe((params: Params) => {this.reid = params['refId']}); 
  }

}
