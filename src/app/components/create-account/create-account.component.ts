import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form: FormGroup;
  error_messages = {
    'fname': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'lname': [
      { type: 'required', message: 'Last Name is required.' }
    ],
    'faname': [
      { type: 'required', message: 'Father Name is required.' }
    ],
    'maname': [
      { type: 'required', message: 'Mother Name is required.' }
    ],
    'mo': [
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'required', message: 'Mobile Number Should be of 10 digit' }
    ],
    'em': [
      { type: 'required', message: 'Email is required.' },
    ],
    'ad': [
      { type: 'required', message: 'Aadhar Number is required.' },
      { type: 'maxLength', message: 'Aadhar Number Should be of 12 digit' },
      { type: 'minLength', message: 'Aadhar Number Should be of 12 digit' }
    ],

    'add': [
      { type: 'required', message: 'Address is required.' },
    ],
    'da': [
      { type: 'required', message: 'Address is required.' },
    ],
    'st': [
      { type: 'required', message: 'State is required.' },
    ],
    'ci': [
      { type: 'required', message: 'City is required.' },
    ],
    'pi': [
      { type: 'required', message: 'Pincode is required.' },
    ],

    'padd': [
      { type: 'required', message: 'Address is required.' },
    ],
    'pda': [
      { type: 'required', message: 'Address is required.' },
    ],
    'pst': [
      { type: 'required', message: 'State is required.' },
    ],
    'pci': [
      { type: 'required', message: 'City is required.' },
    ],
    'ppi': [
      { type: 'required', message: 'Pincode is required.' },
    ],
    
  
  }

constructor(public formBuilder: FormBuilder,) { }

ngOnInit() {
  this.form = this.formBuilder.group({
    fname: new FormControl('', Validators.compose([
      Validators.required 
    ])),
    lname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    faname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    maname: new FormControl('', Validators.compose([
      Validators.required
    ])),
    mo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
      
    ])),
    em: new FormControl('', Validators.compose([
      Validators.required
    ])),
   
    ad: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12)
    ])),

    add: new FormControl('', Validators.compose([
      Validators.required
    ])),

    da: new FormControl('', Validators.compose([
      Validators.required
    ])),
    st: new FormControl('', Validators.compose([
      Validators.required
    ])),
    ci: new FormControl('', Validators.compose([
      Validators.required
    ])),
    pi: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ])),

    padd: new FormControl('', Validators.compose([
      Validators.required
    ])),
    
    pda: new FormControl('', Validators.compose([
      Validators.required
    ])),
    pst: new FormControl('', Validators.compose([
      Validators.required
    ])),
    pci: new FormControl('', Validators.compose([
      Validators.required
    ])),
    ppi: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ]))
  });
}

}
