import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ValidateService } from '../../myservices/validate.service';
import { AuthService } from '../../myservices/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})

export class FormComponent implements OnInit {
    userid: any;
    password: String;
    newpaswrd: String;
    connewpaswrd: String;
    constructor(
        private validateService: ValidateService,
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit() {
        const data = localStorage.getItem('user');
        const value = JSON.parse(data); // the data is always a string.Parse the data with JSON.parse(), 
                                       // and the data becomes a JavaScript object
        this.userid = value.id;
    }

    onChangePassword() {
        const user = {
           password : this.password,
           newpaswrd : this.newpaswrd,
           connewpaswrd : this.connewpaswrd,
        };
        if (!this.validateService.validatePassword(user)) {
            // this.alerts.setMessage('All the fields are required', 'error');
             return false;
        }
        console.log('the current user id is --->>>>', this.userid , '>>>>>');
        this.authService.change(user, this.userid).subscribe(data => {
            console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
            if (data['success']) { // check the responce json value's success key
                 this.authService.refreshStore(user);
                 alert(data['msg']);
                 this.router.navigate(['userdashboard']);
            } else {
              alert(data['msg']);
            }
        });
    }

}
