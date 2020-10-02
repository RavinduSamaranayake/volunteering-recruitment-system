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
    constructor(
        private eventservice: EventService,
    ) { }
    ngOnInit() {
       // this.eventId = this.eventservice.getEventId();
       this.eventservice.$eventdetails
      .subscribe( (data) => {   // get the event id from 
        console.log('I got data in project component', data);
          this.eventId = data;
      });

    }
}

