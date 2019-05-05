import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
  animations: [routerTransition()]
})
export class AddOrganizationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
