import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss'],
  animations: [routerTransition()]
})
export class UserdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
