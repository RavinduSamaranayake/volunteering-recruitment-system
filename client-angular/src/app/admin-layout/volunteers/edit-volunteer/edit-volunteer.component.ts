import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
