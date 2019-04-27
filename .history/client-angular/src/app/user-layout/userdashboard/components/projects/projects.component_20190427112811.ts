import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../../myservices/event.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private allevents: [];
  constructor(
    private eventservice: EventService,
    ) { }

  ngOnInit() {
    this.eventservice.getAllEvent().subscribe((res : any[])=>{
      console.log(res);
      console.log('.......the first row..', res[0]);
      console.log('.......the second row..', );
      //this.allevents = res;
  });
  }

}
