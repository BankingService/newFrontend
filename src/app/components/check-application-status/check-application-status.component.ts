import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-check-application-status',
  templateUrl: './check-application-status.component.html',
  styleUrls: ['./check-application-status.component.css']
})
export class CheckApplicationStatusComponent implements OnInit {

  form: FormGroup;
  showComponent: boolean = false

  error_messages = {
    'refId': [
      { type: 'required', message: 'Reference ID is required' },
    ]
  }
  constructor(public formBuilder: FormBuilder, private service: AdminServiceService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.form = this.formBuilder.group({
      refId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(5),
        Validators.pattern('') 
      ]))
    },
    );
  }

  message: any

  changeBoolean() {
    this.showComponent = true;
  }

  view(id) {
    
    this.service.getAppStatus(id).subscribe(response => {
      this.message = response.message;
    })
  }
}
