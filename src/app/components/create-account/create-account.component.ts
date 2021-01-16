import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'protractor';
import { CreateAccount } from 'src/app/model_classes/create-account';
import { Customeraddress } from 'src/app/model_classes/customeraddress';
import { Customerdocs } from 'src/app/model_classes/customerdocs';
import { Customerinfo } from 'src/app/model_classes/customerinfo';
import { ImageDocs } from 'src/app/model_classes/image-docs';
import { CustomerserviceService } from 'src/app/services/customerservice.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form: FormGroup;
  
  refId:string;
  msg:string;
  country:string="India"



  error_messages = {
    'otp': [
      { type: 'required', message: 'OTP is required.' },
      { type: 'minlength', message: 'OTP length.' },
      { type: 'maxlength', message: 'OTP length.' },
    ],
    'firstName': [
      { type: 'required', message: 'First Name is required.' }
    ],
    'lastNname': [
      { type: 'required', message: 'Last Name is required.' }
    ],
    'fatherName': [
      { type: 'required', message: 'Father Name is required.' }
    ],
    'mobileNumber': [
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'required', message: 'Mobile Number Should be of 10 digit' }
    ],
    'emailId': [
      { type: 'required', message: 'Email is required.' },
    ],
    'aadharCardNo': [
      { type: 'required', message: 'Aadhar Number is required.' },
      { type: 'maxLength', message: 'Aadhar Number Should be of 12 digit' },
      { type: 'minLength', message: 'Aadhar Number Should be of 12 digit' }
    ],
   
    'panNumber': [
      { type: 'required', message: 'pan is required.' },
    ],
   
    'dateOfBirth' : [
      {type : 'required', message : 'dob is required'}
    ],

    'cAddressLine1': [
      { type: 'required', message: 'Address is required.' },
    ],
    'cAddressLine2': [
      { type: 'required', message: 'Address is required.' },
    ],
    'cState': [
      { type: 'required', message: 'State is required.' },
    ],
    'cCity': [
      { type: 'required', message: 'City is required.' },
    ],
    'cPincode': [
      { type: 'required', message: 'Pincode is required.' },
    ],

    'pAddressLine1': [
      { type: 'required', message: 'Address is required.' },
    ],
    'pAddressLine2': [
      { type: 'required', message: 'Address is required.' },
    ],
    'pState': [
      { type: 'required', message: 'State is required.' },
    ],
    'pCity': [
      { type: 'required', message: 'City is required.' },
    ],
    'pPincode': [
      { type: 'required', message: 'Pincode is required.' },
    ],


  }

  constructor(public formBuilder: FormBuilder,private custservice:CustomerserviceService,private router:Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      
      title: new FormControl('',Validators.required),
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      middleName: new FormControl(''),
      lastName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      fatherName: new FormControl('', Validators.compose([
        Validators.required
      ])),
  
      mobileNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)

      ])),
      emailId: new FormControl('', Validators.compose([
        Validators.required
      ])),
   
      aadharCardNo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12)
      ])),
     

      panNumber: new FormControl('', Validators.compose([
        Validators.required
      ])),
 
      dateOfBirth: new FormControl('',Validators.compose([
        Validators.required
      ])),
      cAddressLine1: new FormControl('', Validators.compose([
        Validators.required
      ])),

      cAddressLine2: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cLandMark:new FormControl(''),
      
      cCity: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cState: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cPincode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])),

      pAddressLine1: new FormControl('', Validators.compose([
        Validators.required
      ])),

      pAddressLine2: new FormControl('', Validators.compose([
        Validators.required
      ])),
      pLandMark :new FormControl(''),
      
      pCity: new FormControl('', Validators.compose([
        Validators.required
      ])),
      pState: new FormControl('', Validators.compose([
        Validators.required
      ])),
      pPincode: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ])),
      occupationType:new FormControl(''),
      sourceOfIncome:new FormControl(''),
      grossAnnualIncome:new FormControl('')
    });

  }




  customerRequest:Customerinfo;
  customerRequestAddress:Customeraddress;

 mailId:string
  view(createCustomerFormObj){
   
    this.customerRequestAddress=new Customeraddress(createCustomerFormObj.value.cAddressLine1,createCustomerFormObj.value.pAddressLine1,
      createCustomerFormObj.value.cAddressLine2, createCustomerFormObj.value.pAddressLine2,createCustomerFormObj.value.cLandMark,
      createCustomerFormObj.value.pLandMark,createCustomerFormObj.value.cCity,createCustomerFormObj.value.pCity,createCustomerFormObj.value.cState,
      createCustomerFormObj.value.pState,createCustomerFormObj.value.cPincode,createCustomerFormObj.value.pPincode);

    this.customerRequest=new Customerinfo(null,createCustomerFormObj.value.title,createCustomerFormObj.value.firstName,createCustomerFormObj.value.middleName,
      createCustomerFormObj.value.lastName,createCustomerFormObj.value.fatherName,createCustomerFormObj.value.mobileNumber,createCustomerFormObj.value.emailId,
      createCustomerFormObj.value.aadharCardNo,createCustomerFormObj.value.dateOfBirth,createCustomerFormObj.value.occupationType,createCustomerFormObj.value.sourceOfIncome,
      createCustomerFormObj.value.grossAnnualIncome,createCustomerFormObj.value.panNumber,this.customerRequestAddress);
   
      this.mailId= String(createCustomerFormObj.value.emailId)

 //console.log(this.mailId)
    this.addcustomerrequest(this.customerRequest)

  }
  addcustomerrequest(customerrequest){
    console.log(JSON.stringify(customerrequest))
    this.custservice.createCustomerRequest(customerrequest).subscribe(response =>
      {  alert(JSON.stringify(response));
           let cid=response.id;
           let msg=response.msg;
           alert(msg)
          let mail = this.mailId
          console.log(mail)
         this.router.navigate(['createaccount2',{cid,mail}]);
         })
  }

}