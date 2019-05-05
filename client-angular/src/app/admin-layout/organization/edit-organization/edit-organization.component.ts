import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss'],
  animations: [routerTransition()]
})
export class EditOrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
