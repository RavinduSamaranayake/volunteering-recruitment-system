import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AuthService} from '../../../myservices/auth.service';
import { OrganizationService } from 'src/app/myservices/organization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    private fullname: string;
    private organization;
    imagepreview: string = '';

    constructor( private authService: AuthService, private translate: TranslateService, public router: Router,private orgService:OrganizationService) {

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
        this.orgService.getmyOrganization().subscribe(
            org=>{
                let Org: any = org;
                this.organization={
                 id:Org._id,
                 name:Org.name,
                 email:Org.email,
                 image:Org.image,
                 contact:Org.contact,
                 address:Org.address,
                 about:Org.about,
                }
                this.imagepreview = (this.organization.image).toString();
            }
        
        );
 

        
        this.pushRightClass = 'push-right';
        const data = localStorage.getItem('user');
        // console.log('the user is --->>>>', data , '>>>>>');
        const value = JSON.parse(data); // the data is always a string.Parse the data with JSON.parse(), 
                                       // and the data becomes a JavaScript object
        console.log('the user name is ------>>>>', value.name , '>>>>>');
        this.fullname = value.name;

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

    changeLang(language: string) {
        this.translate.use(language);
    }
}
