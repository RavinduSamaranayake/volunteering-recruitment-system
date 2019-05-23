import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() event:any;

  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit() {

  }

  onDelete(id){
    console.log(id);
     this.eventService.deleteEvent(id);
     this.router.navigate['/']
  }

}
