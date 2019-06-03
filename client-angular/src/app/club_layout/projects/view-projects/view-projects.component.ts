import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { routerTransition } from 'src/app/router.animations';

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss'],
})
export class ViewProjectsComponent implements OnInit {
  id: string;
  events: any = [];
  eventsUnchanged: any = [];
  event2: any = [1, 2, 3];
  modalRef: BsModalRef;
  alerts: any[] = [{
  }];


  constructor(private eventservice: EventService,
    private modalService: BsModalService, ) {

  }

  ngOnInit() {
    const data = localStorage.getItem('user');
    const value = JSON.parse(data);
    this.id = value.id
    this.eventservice.getEventbyOrganization(this.id).subscribe(data => {
      this.eventsUnchanged = data;
      this.events = this.eventsUnchanged.map(item => ({
        _id: item._id,
        title: item.title,
        description: item.description,
        image: item.image,
        date: (item.date).substring(0, 10),
        time: (item.time).replace(/:\d{2}\s/, ' '),
        type: item.type,
        organization: item.organization
      }))
      console.log(this.events);
      console.log(this.event2);

    });
  }

  eventChange(id) {
    console.log(id);
    for (let i = 0; i < this.events.length; i++)
      if (this.events[i]._id == id) {
        this.events.splice(i, 1);
      }
    this.addalert("success", "you have successfully deleted the event");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  // adding alert 
  addalert(type, msg): void {
    this.alerts.push({
      type: type,
      msg: msg,
      timeout: 3000
    });
  }
}


