import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';
import { Table } from './Table'; // import the table interface

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  eventid: String;
  allevents: Table[];
  constructor(
    private eventservice: EventService,
    ) { }

  ngOnInit() {
  //   this.eventservice.getAllEvent().subscribe((res : any[])=>{
  //     console.log(res);
  //     console.log('.......the first row..', res[0].title , '  ' , res[0].description);
  //     console.log('.......the second row..', res[1]);
  //     // this.allevents = res;
  // });

  this.eventservice.getAllEvent().subscribe((data: Table[]) => {
    this.allevents = data;
    console.log(this.allevents[1].organization);
    // this.allevents = res;
});
  }


  cellClicked(element) {
    console.log(element._id + ' cell clicked');
    this.eventid = element._id;
    this.eventservice.setEventId(this.eventid);
    console.log(this.eventservice.getEventId() + ' ....call');
  }

  getEid(){}


}
