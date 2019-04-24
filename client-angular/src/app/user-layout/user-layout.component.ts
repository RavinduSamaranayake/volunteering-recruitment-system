import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  collapedSideBar: boolean;

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }

}
