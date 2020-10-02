import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../myservices/validate.service';
import { AuthService } from '../../myservices/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    userid: any;
    firstname: String;
    lastname: String;
    username: String;
    email: String;
    password: String;
    conpassword: String;
    address: String;
    address2: String;
    cntctmob: String;
    cntctfix: String;
    age: String;

    constructor(
        private validateService: ValidateService,
        private authService: AuthService,
        private router: Router,
    ) {}
    ngOnInit() {
        const data = localStorage.getItem('user');
        console.log('the user is --->>>>', data , '>>>>>');
        const value = JSON.parse(data); // the data is always a string.Parse the data with JSON.parse(), 
                                       // and the data becomes a JavaScript object
        this.userid = value.id;

        this.firstname = value.firstname;
        this.lastname = value.lastname;
        this.username = value.username;
        this.email = value.email;
        this.address = value.address;
        this.address2 = value.address2;
        this.cntctmob = value.cntctmob;
        this.cntctfix = value.cntctfix;
        this.age = value.age;
    }
    onRegisterSubmit() {
        const user = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          username: this.username,
          password: this.password,
          rpassword: this.conpassword,
          address: this.address,
          address2: this.address2,
          cntctmob: this.cntctmob,
          cntctfix: this.cntctfix,
          age: this.age,
        };

        if (!this.validateService.validateProfile(user)) {
            // this.alerts.setMessage('All the fields are required', 'error');
             return false;
        }

        if (!this.validateService.validateEmail(user.email)) {
            // this.alerts.setMessage('Email is not valid', 'error');
            alert('Email is not valid');
            return false;
        }

        console.log('the current user id is --->>>>', this.userid , '>>>>>');
        this.authService.changeProfile(user, this.userid).subscribe(data => {
            console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
            if (data['success']) { // check the responce json value's success key
                 this.authService.refreshStore(user);
                 alert('Profile change successfully!');
            } else {
              alert('Please logout and re login for changin your profile again');
            }
        }
    }
}


