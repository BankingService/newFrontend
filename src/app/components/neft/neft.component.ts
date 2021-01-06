import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {

  form1: FormGroup;
  flag:boolean = false;
  fromAccountNo: any[] = [11111,22222,33333,44444]
  constructor() { }

  ngOnInit() {
    this.form1 = new FormGroup({
      fromAccount: new FormControl('', [Validators.required]),
      toAccount:  new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
      date: new FormControl('', [Validators.required]),
      otp: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    })
  }
  setFlag(){
    this.flag = true;
  }

}
