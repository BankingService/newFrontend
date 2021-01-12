import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-application-status',
  templateUrl: './check-application-status.component.html',
  styleUrls: ['./check-application-status.component.css']
})
export class CheckApplicationStatusComponent implements OnInit {

  form: FormGroup;
  showComponent :boolean=false

  error_messages = {
    'refId': [
      { type: 'required', message: 'Reference ID is required' },
    ]}
  constructor(public formBuilder: FormBuilder) {} 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      refId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(5)
      ]))
    },
    ); 
  }

  changeBoolean()
{
    this.showComponent = true;
}

}
