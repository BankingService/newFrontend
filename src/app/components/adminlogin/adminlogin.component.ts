import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminInfo } from 'src/app/appmodel/AdminInfo';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/admin-service.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new AdminInfo();
  form: FormGroup;

  error_messages = {

    'id': [
      { type: 'required', message: 'Admin Id is required.' }
    ],


    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password length too small' },
      { type: 'maxlength', message: 'Exceeds password length limit' },
      { type: 'pattern', message: 'Password must consist one special character,one alphabet and one numeric' }

    ],
  }

  constructor(public formBuilder: FormBuilder, private router: Router, private http: HttpClient, private service: AdminServiceService) {

    this.form = this.formBuilder.group({

      id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)

      ])),

      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8)

      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')

      ])),

    },

    );
  }

  ngOnInit() {

  }




  AdminLogin() {
  //   console.log(this.admin);
  //   this.http.post<any>("http://localhost:8086/loginAdmin", this.admin)
  //     .subscribe(
  //       data => {
  //         console.log(data)
  //         this.service.adminLogin(this.admin).subscribe(response => {
  //           alert(JSON.stringify(response));
  //           if (data.status == "FAILURE") {
  //             alert(data.message);
  //           }
  //           else {
  //             this.router.navigate(['admindashboard']);
  //           }
  //         }
  //         )
  //       }
  //     )
  // }
  this.router.navigate(['admindashboard']);
  }

}
