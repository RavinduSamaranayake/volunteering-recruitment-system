import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { EventService } from 'src/app/myservices/event.service';
import { OrganizationService } from 'src/app/myservices/organization.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
  animations: [routerTransition()]
})
export class UserdashboardComponent implements OnInit {
   
    alleventcount : String;
    upcommingcount : String;
    historycount : String;
    organizecount : String;


    constructor(
        private router: Router,
        private eventservice: EventService,
        private organizationservice: OrganizationService
        ){
            const dataval = localStorage.getItem('user');
            const value = JSON.parse(dataval);
            const userid = value.id;
            let upcount = ''

             this.eventservice.getAllUpcommingEventCount(userid).subscribe(data => {
                 this.upcommingcount = data;
        });
    }


    ngOnInit() {

    }

    public viewAvailable() {
       console.log('.............clicked it.........');
       this.router.navigate(['projects']);

    }

    public viewUpcomming() {
        console.log('.............clicked UPCOMMING.........');
        this.router.navigate(['upcomming']);
     }

     public viewHistory() {
        console.log('.............clicked HISTORY.........');
        this.router.navigate(['history']);
     }
     public viewOrganization() {
        this.router.navigate(['organizations']);
     }

}
