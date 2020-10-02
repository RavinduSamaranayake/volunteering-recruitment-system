import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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
    constructor() {}

    ngOnInit() {}

    onChangePassword() {
        const user = {
           pass
        }
    }
}
