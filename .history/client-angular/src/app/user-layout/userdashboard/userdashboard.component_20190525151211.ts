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
   
    alleventcount;
    upcommingcount = '';
    historycount;
    organizecount;


    constructor(
        private router: Router,
        private eventservice: EventService,
        private organizationservice: OrganizationService
        ){
            
    }

   
    ngOnInit() {
        const dataval = localStorage.getItem('user');
            const value = JSON.parse(dataval);
            const userid = value.id;
        
         //set the count values
    this.eventservice.getAllEventCount().subscribe(data => {
            this.alleventcount = 
      });

       this.eventservice.getAllUpcommingEventCount(userid).subscribe(data => {
            this.upcommingcount = JSON.stringify(data);
            console.log('upcomming count is : ', this.upcommingcount);
      });
       this.eventservice.getAllEventHistoryCount(userid).subscribe(data => {
            this.historycount = JSON.stringify(data);
      });
      this.organizationservice.getAllOrganizationsCount().subscribe(data => {
            this.organizecount = JSON.stringify(data);
    });
      
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
