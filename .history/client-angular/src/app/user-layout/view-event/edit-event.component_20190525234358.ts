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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  eventId: String;
  title: any;
  date: String;
  description: String;
  attendees: String;
  rating: String;
  organize: String;

  ngAfterViewInit(){}

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(this.eventId).subscribe(data => {
    //  this.eventId = data._id;
      this.title = data;
      this.date = data.date;
      this.description = data.description;
      this.attendees = data.attendees;
      this.rating = data.rating;
      this.organize = data.organization;
    });
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
  id: string;
}
