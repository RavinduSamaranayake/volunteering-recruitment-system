import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent implements OnInit {
  eventId: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log(this.eventId);
  }

}
