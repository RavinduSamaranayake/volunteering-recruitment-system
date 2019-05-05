import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
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
  this.eventservice.getAllSelectEvent(user).subscribe((data: Table[]) => {
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
