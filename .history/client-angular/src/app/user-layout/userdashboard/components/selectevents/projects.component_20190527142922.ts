import { Component, OnInit,  Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {EventService} from '../../../../myservices/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  public orgName = '';
  public user_id = '';
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
    const dataval = localStorage.getItem('user');
    const value = JSON.parse(dataval);
    const userid = value.id;
    this.user_id = userid;

    this.eventservice.getAllUpcommingEvent(userid).subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(instance => {
        eventInstance = {
          title: instance[1].title,
          organization: instance[1].organization,
          description: instance[1].description,
          date: instance[1].date,
          slctid: instance[1]._id,
          eventid: instance[1].eventid
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

  notGoing(eventid){
    console.log('not going......',eventid);
    this.eventservice.removeSelectEvent(eventid).subscribe(data => {
      if (data['sucess']){
        alert('Now you are not going for this event....');
        

      }else {
        alert('Some thing went wrong....');
      }
  });

}
}
export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  slctid: string;
  eventid: string;
}