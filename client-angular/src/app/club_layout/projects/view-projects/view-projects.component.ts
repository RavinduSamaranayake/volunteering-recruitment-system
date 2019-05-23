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
  eventsUnchanged:any=[];
  event2:any=[1,2,3];


  constructor(private eventservice:EventService) {

   }

  ngOnInit() {
    const data = localStorage.getItem('user');
    const value = JSON.parse(data); 
    this.id=value.id
    this.eventservice.getEventbyOrganization(this.id).subscribe(data => {
      this.eventsUnchanged=data;
      this.events=this.eventsUnchanged.map(item=>({
                _id: item._id,
                title: item.title,
                description: item.description,
                image:item.image, 
                date:(item.date).substring(0,10),
                time:(item.time).replace(/:\d{2}\s/,' '),
                type:item.type,
                organization:item.organization
      }))
      console.log(this.events);
      console.log(this.event2);

    });
  }

}
