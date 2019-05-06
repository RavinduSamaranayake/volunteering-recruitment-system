import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.scss'],
  animations: [routerTransition()]
})
export class EditEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
