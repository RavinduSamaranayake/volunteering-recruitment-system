import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';
import {ProjectsComponent} from '../projects/projects.component';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    eventId: String;
    selectevent: any;
    constructor(
        private eventservice: EventService,
    ) { }
    ngOnInit() {
       // this.eventId = this.eventservice.getEventId();
       this.eventservice.$eventdetails

     // get the event id from event service 
     // (this method is very good method to transfer data between two compnents without any relation like child parents)
      .subscribe( (data) => {
        console.log('I got data in project component', data);
        this.sele = data;
      });

    }
}

