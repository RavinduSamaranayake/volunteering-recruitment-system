import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { routerTransition } from '../../router.animations';

import { VolunteerService } from '../../myservices/volunteer.service';
import { EventService } from '../../myservices/event.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent implements AfterViewInit {

   
  ngAfterViewInit(){}

  constructor(
    
  ) {
   
}
}
