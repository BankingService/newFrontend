import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-createaccountstatus',
  templateUrl: './createaccountstatus.component.html',
  styleUrls: ['./createaccountstatus.component.css']
})
export class CreateaccountstatusComponent implements OnInit {

  reid:string;
  msg:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {this.reid = params['refId'];this.msg=params['msg']}); 
  }

}
