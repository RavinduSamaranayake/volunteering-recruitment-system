import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
// tslint:disable-next-line: quotemark
  selector: "app-add-organization",
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
  animations: [routerTransition()]
})
export class AddOrganizationComponent implements OnInit {
  public name='';
  public regNo= '';
  public email= '';
  constructor() {}

  ngOnInit() {}
}
