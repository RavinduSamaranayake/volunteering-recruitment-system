import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../myservices/validate.service';
import { AuthService } from '../myservices/auth.service';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-trysign',
  templateUrl: './trysign.component.html',
  styleUrls: ['./trysign.component.scss'],
  animations: [routerTransition()]
})
export class TrysignComponent implements OnInit {
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  rpassword: String;
  address: String;
  address2: String;
  : String;
  rpassword: String;

  constructor(
      private validateService: ValidateService,
      private authService: AuthService,
      private router: Router,
      private alerts: AlertsService
  ) {}

  ngOnInit() {
  }

  onRegisterSubmit() {
      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
        rpassword: this.rpassword
      };

  console.log('...user..is..', user.name);
       // Required Fields
   if (!this.validateService.validateRegister(user)) {
     // this.alerts.setMessage('All the fields are required', 'error');
      return false;
    }
    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      // this.alerts.setMessage('Email is not valid', 'error');
      alert('Email is not valid');
      return false;
    }
    // Register user with server
    // call the auth service and pass the user to registerUser function
    // get the responce json object from server using subscribe method. the data isa responce json
    this.authService.registerUser(user).subscribe(data => {
      console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
      if (data['success']) { // check the responce json value's success key and navigate login page
        this.router.navigate(['login']);
        alert('Registration successfully! now you can login');
        // this.alerts.setMessage('Registration successfully! now you can login', 'success');
      } else {
        this.router.navigate(['signup']);
        alert('Please signup again');
        // this.alerts.setMessage('Please signup again', 'warn');
      }
    });

  }

}


