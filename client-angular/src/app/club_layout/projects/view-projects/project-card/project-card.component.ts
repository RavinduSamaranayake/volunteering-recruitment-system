import { Component, OnInit, Input, EventEmitter, Output, TemplateRef } from '@angular/core';
import { EventService } from 'src/app/myservices/event.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Subject } from 'rxjs';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() event: any;
  @Output() eventchange: EventEmitter<any> = new EventEmitter();
  modalRef: BsModalRef;

  constructor(private eventService: EventService,
    private router: Router,
    private modalService: BsModalService, ) { }

  ngOnInit() {

  }

  onDelete(id) {
    console.log(id);
    this.eventService.deleteEvent(id);
    this.modalRef.hide();
    this.eventchange.emit(id);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }


}
