import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-edit-organizations',
  templateUrl: './edit-organizations.component.html',
  styleUrls: ['./edit-organizations.component.scss'],
  animations: [routerTransition()]
})
export class EditOrganizationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
