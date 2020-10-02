import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    eventId: String;
    selectevent: any;
    title: String;
    date: String;
    description: String;
    attendees: String;
    rating: String;
    organize: String;
    status: String;
    userid: String;
    event_id: String;
    constructor(
        private eventservice: EventService,
    ) { }
    ngOnInit() {
       this.eventservice.$eventdetails

     // get the event id from event service 
     // (this method is very good method to transfer data between two compnents without any relation like child parents)
      .subscribe( (data) => {
        console.log('I got data in project component', data);
        this.selectevent = data;
        this.eventId = data._id;
        this.title = data.title;
        this.date = data.date;
        this.description = data.description;
        this.attendees = data.attendees;
        this.rating = data.rating;
        this.organize = data.organization;
        this.status = data.status;
        
        // get the user id from local storage
        const dataval = localStorage.getItem('user');
        const value = JSON.parse(dataval); // the data is always a string.Parse the data with JSON.parse(), 
                                       // and the data becomes a JavaScript object
        this.userid = value.id;
        console.log('the user id is --->>>>', this.userid , '>>>>>');

        // concatanate the user id and selected user id and creatte the new unique selected event id
        this.event_id = this.eventId.concat(value.id);
        console.log('the user event id is --->>>>', this.event_id , '>>>>>');
      });
    }

  isSelected() {
    if (this.status === 'selected') {
      return true;
    } else {
      return false;
    }
  }

    addselectevent() {
      const event = {
        _id: this.event_id,
        userid: this.userid,
        title: this.title,
        date: this.date,
        description: this.description,
        attendees: this.attendees,
        rating: this.rating,
        organization: this.organize,
      };
    // get the responce json object from server using subscribe method. the data isa responce json
    this.eventservice.addSelectEvent(event).subscribe(data => {
      console.log('...............', data['msg'], '.........', data, '..........');
      if (data['success']) {git \
        alert('Thank You for join with this event....');
      } else {
        alert('Sorry! You are already going for this event');
      }
    });

  }
}

