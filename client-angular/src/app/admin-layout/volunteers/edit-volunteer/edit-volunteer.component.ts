import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { routerTransition } from '../../../router.animations';

import { VolunteerService } from '../../../myservices/volunteer.service';
import { EventService } from '../../../myservices/event.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteerComponent implements AfterViewInit {
  volunteerId = '';
  public volunteerInstance: Volunteer = {
    name: '',
    email: '',
    contact: '',
    address: '',
    age: '',
    id: '',
    blocked: false
  };

  displayedColumns = [
    'organization',
    'title',
    'description',
    'date',
    'options'
  ];
  dataSource: MatTableDataSource<Event>;
  events: Event[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private volunteerService: VolunteerService,
    private eventService: EventService
  ) {
    this.volunteerId = this.route.snapshot.paramMap.get('id');
    let eventInstance: Event;

    this.volunteerService.getVolunteerById(this.volunteerId).subscribe(data => {
      const entries = Object.entries(data);
      this.volunteerInstance = {
        name: entries[1][1],
        email: entries[2][1],
        contact: entries[6][1],
        address: entries[5][1],
        age: entries[7][1],
        id: entries[0][1],
        blocked: false
      };
    });

    this.eventService.getUserEvents(this.volunteerId).subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(entry => {
        eventService.getEventByID(entry[1].eventid).subscribe(data2 => {
          const entries2 = Object.entries(data2);
          eventInstance = {
            title: entries2[1][1],
            organization: entries2[9][1].name,
            description: entries2[2][1],
            date: entries2[3][1],
            id: entries2[0][1],
          };
          this.dataSource.data = [...this.dataSource.data, eventInstance];
        });
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.events);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editAccess() {
    this.volunteerInstance.blocked = !this.volunteerInstance.blocked;
    this.volunteerService
      .editAccessVolunteer(this.volunteerInstance)
      .subscribe(data => {
        console.log(data);
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

export interface Volunteer {
  name: string;
  email: string;
  contact: string;
  age: string;
  address: string;
  id: string;
  blocked: boolean;
}
