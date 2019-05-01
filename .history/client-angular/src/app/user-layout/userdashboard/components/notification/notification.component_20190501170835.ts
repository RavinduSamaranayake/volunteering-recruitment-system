// import { Component, OnInit } from '@angular/core';

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
// export class NotificationComponent implements OnInit {
//     constructor() { }
//     ngOnInit() { }
// }
export class NotificationComponent implements AfterViewInit {

    @ViewChild(ProjectsComponent) child;
    appParentMessage: string;
  
    constructor() { }
  
    ngAfterViewInit() {
      this.appParentMessage = this.child.even;
    }
  }
