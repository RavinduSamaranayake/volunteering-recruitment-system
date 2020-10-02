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

  public eventInstance: Event = {
    title: '',
    organization: '',
    description: '',
    date: '',
    time: '',
    type: '',
    rating: 0,
    id: ''
  };

  ngAfterViewInit(){}

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventByID(this.eventId).subscribe(data => {
     // const title = data.title;
    // const entries = Object.entries(data);
     console.log('the output data is ', data['title']);
    //  const titleid = entries[1]
      this.eventInstance = {
        title: data['title'],
        organization: data['organization'],
        description: data['description'],
        date:  data['title'],
        time:  data['title'],
        type:  data['title'],
        rating: parseFloat(data['title']),
        id:  data['title']
     };
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
