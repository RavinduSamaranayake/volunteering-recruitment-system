import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, 
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent implements AfterViewInit {

  ngAfterViewInit(){}

  constructor() {}
}
