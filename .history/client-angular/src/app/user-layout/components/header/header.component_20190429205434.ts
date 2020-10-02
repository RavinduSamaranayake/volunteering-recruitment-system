import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from '../../../myservices/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    private fullname: string;

    constructor( private authService: AuthService, private translate: TranslateService, public router: Router) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        const data = localStorage.getItem('user');
        console.log('the user is --->>>>', data , '>>>>>');
        const value = JSON.parse(data); // the data is always a string.Parse the data with JSON.parse(), 
                                       // and the data becomes a JavaScript object
        this.fullname = value.firstname + ' ' + value.lastname;
        console.log('the user first name is ------>>>>', value.lastname , '>>>>>');

    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.authService.logout();
        console.log('...successfully logout......');
        this.router.navigate(['main']);
        return false;
    }

    loadProfile() {
        this.router.navigate(['profile-page']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
