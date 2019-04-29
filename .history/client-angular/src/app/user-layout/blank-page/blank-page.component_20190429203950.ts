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
        this.firstname = value.firstname;
        this.lastname 
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
    }
}
