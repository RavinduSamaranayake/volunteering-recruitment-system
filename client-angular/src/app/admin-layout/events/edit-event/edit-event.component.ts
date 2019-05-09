import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
