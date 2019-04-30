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
    password: String;
    newpaswrd: String;
    connewpaswrd: String;
    constructor( 
        
    ) {}

    ngOnInit() {}

    onChangePassword() {
        const user = {
           password : this.password,
           newpaswrd : this.newpaswrd,
           connewpaswrd : this.connewpaswrd,
        };
    }
}
