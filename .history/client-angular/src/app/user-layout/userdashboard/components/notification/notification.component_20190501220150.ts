import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';
im
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
        this.eventId = this.eventservice.getEventId();
     }
}

