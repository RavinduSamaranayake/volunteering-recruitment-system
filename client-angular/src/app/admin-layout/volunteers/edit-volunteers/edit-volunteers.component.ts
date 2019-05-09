import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-volunteers',
  templateUrl: './edit-volunteers.component.html',
  styleUrls: ['./edit-volunteers.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
