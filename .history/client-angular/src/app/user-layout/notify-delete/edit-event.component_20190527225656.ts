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
        date:  data['date'],
        time:  data['time'],
        type:  data['type'],
        rating: parseFloat(data['rating']),
        id:  data['_id']
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
