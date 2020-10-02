import { Component, OnInit,  Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {EventService} from '../../../../myservices/event.service';
import { Table } from './Table'; // import the table interface

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  // this is use to share the selected event data pass to the viewdata component via event service
  // tslint:disable-next-line:no-output-rename
  @Output('change') change = new EventEmitter();

  selectevent: any;
  eventid: String;
  allevents: Table[];
  constructor(
    private eventservice: EventService,
    ) { }

  ngOnInit() {
    const dataval = localStorage.getItem('user');
    const value = JSON.parse(dataval);
    const userid = value.id;
    this.eventservice.getAllUpcommingEvent(userid).subscribe((data: Table[]) => {
    this.allevents = data;
    console.log('the status is ', this.allevents[5].status);
});
  }


  cellClicked(element) {
    console.log(element._id + ' cell clicked');
    this.selectevent = element;
    this.eventservice.setEvent(this.selectevent);
   // console.log(this.eventservice.getEvent().title + ' ....call');
  }

  getEid() {
     return this.eventid;
  }



}


export class ProjectsComponent implements AfterViewInit {
  public orgName = '';
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
    const dataval = localStorage.getItem('user');
    const value = JSON.parse(dataval);
    const userid = value.id;

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
}

export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
}