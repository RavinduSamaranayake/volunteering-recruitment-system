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

  constructor(private eventservice: EventService) {
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
          id: instance[1]._id
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
    console.log("selecteduser id is ...",this.user_id , "selected event id is ....",eventid);

    // fetch the data from api
    this.eventservice.getEventByID(this.event_id).subscribe(data => {
         title: data['title'],
         organization: data['organization'],
         description: data['description'],
         date:  data['date'],
         time:  data['time'],
         type:  data['type'],
         rating: parseFloat(data['rating']),
         id:  data['_id']
     });
  }
}

export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
}
