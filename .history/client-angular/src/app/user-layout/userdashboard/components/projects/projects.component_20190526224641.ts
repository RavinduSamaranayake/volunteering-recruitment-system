// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventService } from '../../../../myservices/event.service';
// import { Table } from './Table'; // import the table interface

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss']
// })
// export class ProjectsComponent implements OnInit {
//   // this is use to share the selected event data pass to the viewdata component via event service
//   // tslint:disable-next-line:no-output-rename
//   @Output('change') change = new EventEmitter();

//   selectevent: any;
//   eventid: String;
//   allevents: Table[];
//   constructor(private eventservice: EventService) {}

//   ngOnInit() {
//     this.eventservice.getAllEvent().subscribe((data: Table[]) => {
//       this.allevents = data;
//       console.log(this.allevents[1].organization);
//     });
//   }

//   cellClicked(element) {
//     console.log(element._id + ' cell clicked');
//     this.selectevent = element;
//     this.eventservice.setEvent(this.selectevent);
//   }

//   getEid() {
//     return this.eventid;
//   }
// }

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { EventService } from '../../../../myservices/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routerTransition()]
})
export class ProjectsComponent implements AfterViewInit {
  eventcount = 0;
  public orgName = '';
  slctevent_id: String;
  user_id: String;
  event_id: String;
  title: String;
  time: String;
  date: String;
  description: String;
  attendees: String;
  rating: String;
  organize: String;
  status: String;
  displayedColumns = [
    'title',
    'organization',
    'description',
    'date',
    'options'
  ];
  dataSource: MatTableDataSource<Event>;
  events: Event[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private eventservice: EventService,
              private router: Router) {
    // Create Events
    let eventInstance: Event;

    this.eventservice.getAllEvent().subscribe(data => {
      const entries = Object.entries(data);

      entries.forEach(instance => {
        eventInstance = {
          title: instance[1].title,
          organization: instance[1].organization,
          description: instance[1].description,
          date: instance[1].date,
          id: instance[1]._id,
          checkgoing: this.checkGoingEvent(instance[1]._id)
        };

        // this.events.push(eventInstance);
        this.dataSource.data = [...this.dataSource.data, eventInstance];
      });
    });
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.events);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  // select the events and add it to the selected event collection
  goingEvent(eventid){
    const dataval = localStorage.getItem('user');
    const value = JSON.parse(dataval);
    const userid = value.id;
    this.user_id = userid;
    this.event_id = eventid;

    // concat the userid and event id and genarate slct event id value
    this.slctevent_id = this.event_id.concat(userid);
    console.log('the user event id is --->>>>', this.slctevent_id , '>>>>>');

    // fetch the data from api
    this.eventservice.getEventByID(this.event_id).subscribe(data => {
      this.title = data['title'];
      this.date = data['date'];
      this.description = data['description'];
      this.attendees = data['attendees'];
      this.rating = data['rating'];
      this.organize = data['organization'];
     });

     this.selectTheEvent(eventid);
    
  }

  selectTheEvent(eventid){

    // add the selected event to collection
    const event = {
      id: this.slctevent_id,
      eventid: this.event_id,
      userid: this.user_id,
      title: this.title,
      date: this.date,
      description: this.description,
      attendees: this.attendees,
      rating: this.rating,
      organization: this.organize,
      status: 'going'
    };
   // get the responce json object from server using subscribe method. the data isa responce json

   console.log('event id is .....----',event.id);
   console.log('event title is .....----',event.title);
  this.eventservice.addSelectEvent(event).subscribe(data => {
    console.log('...............', data['msg'], '.........', data, '..........');
    if (data['success']) {
      alert('Thank You for join with this event....');
         this.router.navigate(['/view-event/'+eventid]);
    } else {
      alert('Sorry! You are already going for this event');
    }
  });
  }

  // check user is already going or not event
  checkGoingEvent(eventid){
    const dataval = localStorage.getItem('user');
    const value = JSON.parse(dataval);
    const userid = value.id;

    const userevent = {
        eventid: eventid,
        userid: userid,
    }
    this.eventservice.checkUserGoing(userevent).subscribe(data => {
      if (data['success']) {
        console.log('.......sucesss true...',data['msg']);
          return true;
      } else {
        console.log('.......sucesss false...',data['msg']);
          return false;
      }
    });
  }
  checkit(check){
    if(check){
      console.log("...................already going...........");
    }else
  }
}

export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
  checkgoing: any;
}
