import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { routerTransition } from '../../router.animations';

import { VolunteerService } from '../../myservices/volunteer.service';
import { EventService } from '../../myservices/event.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent implements AfterViewInit {
  displayedColumns = [
    'name',
    'email',
    'contactNo',
    'age',
    'address',
    'options'
  ];
  dataSource: MatTableDataSource<Volunteer>;
  volunteers: Volunteer[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  eventId: String;

  public eventInstance: Event = {
    title: '',
    organization: '',
    description: '',
    date: '',
    time: '',
    type: '',
    rating: 0,
    volunteers: [],
    id: ''
  };

  constructor(
    private route: ActivatedRoute,
    private volunteerService: VolunteerService,
    private eventService: EventService
  ) {
    this.eventId = this.route.snapshot.paramMap.get('id');
    let volunteerInstance: Volunteer;

    this.eventService.getEventByID(this.eventId).subscribe(data => {
      const entries = Object.entries(data);
      this.eventInstance = {
        title: entries[1][1],
        organization: entries[9][1],
        description: entries[2][1],
        date: entries[3][1],
        time: entries[4][1],
        type: entries[5][1],
        volunteers: entries[6][1],
        rating: parseFloat(entries[7][1]),
        id: entries[0][1]
      };

         });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.volunteers);
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
  time: string;
  type: string;
  rating: Number;
  volunteers: any;
  id: string;
}

export interface Volunteer {
  name: string;
  email: string;
  contact: string;
  age: string;
  address: string;
  id: string;
}
