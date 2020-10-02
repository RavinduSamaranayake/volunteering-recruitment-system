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
       //this.eventId = this.eventservice.getEventId();
       this.eventservice.$e
      .subscribe( (data) => {
        console.log("I got data in navbar", data);
        
          this.isUserLogged = true;
          this.user = data;
      })

    }
}

