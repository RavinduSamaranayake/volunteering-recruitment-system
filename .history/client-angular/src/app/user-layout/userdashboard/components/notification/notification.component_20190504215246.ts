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
      });
      con

    }

  isSelected(){
    if (this.status === 'selected'){
      return true;
    } else {
      return false;
    }
  }

    addselectevent() {
      const event = {
        _id: this.eventId,
        title: this.title,
        date: this.date,
        description: this.description,
        attendees: this.attendees,
        rating: this.rating,
        organization: this.organize,
      };
    // get the responce json object from server using subscribe method. the data isa responce json
    this.eventservice.addSelectEvent(event).subscribe(data => {
      console.log('...............', data['msg'], '.........', data, '..........'); // check the responce json 
      if (data['success']) { // check the responce json value's success key and navigate login page
        alert('Thank You for join....');
        // this.alerts.setMessage('Registration successfully! now you can login', 'success');
      } else {
        alert('Some thing went wrong');
        // this.alerts.setMessage('Please signup again', 'warn');
      }
    });

  }
}

