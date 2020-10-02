import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { EventService } from '../../../myservices/event.service';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss'],
  animations: [routerTransition()]
})
export class EditEventsComponent implements AfterViewInit {
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

    this.eventservice.getAllEvent().subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(instance => {
        eventInstance = {
          title: instance[1].title,
          organization: instance[1].organization.name,
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
