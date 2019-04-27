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
    this.eventservice.getAllEvent90\.subscribe((res : any[])=>{
      console.log(res);
      this.allevents = res;
  });
  }

}
