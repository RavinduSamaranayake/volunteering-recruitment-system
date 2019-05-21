import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() event:any;

  constructor() { }

  ngOnInit() {

  }

}
