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
    this.selectevent = element;
    this.eventservice.setEvent(this.selectevent);
    console.log(this.eventservice.getEvent() + ' ....call');
  }

  getEid() {
     return this.eventid;
  }


}
