import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {
  id:string;
  events:any=[];
  event2:any=[1,2,3];


  constructor(private eventservice:EventService) {

   }

  ngOnInit() {
    const data = localStorage.getItem('user');
    const value = JSON.parse(data); 
    this.id=value.id
    this.eventservice.getEventbyOrganization(this.id).subscribe(data => {
      this.events=data;
      console.log(this.events);
      console.log(this.event2);

    });
  }

}
