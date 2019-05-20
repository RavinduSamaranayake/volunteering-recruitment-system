import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { routerTransition } from '../../../router.animations';

import { VolunteerService } from '../../../myservices/volunteer.service';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteerComponent implements AfterViewInit {
  volunteerId = '';
  public volunteerInstance: Volunteer = {
    name: '',
    email: '',
    contact: '',
    address: '',
    age: '',
    id: ''
  };

  displayedColumns = ['id', 'title', 'description', 'date', 'options'];
  dataSource: MatTableDataSource<Event>;
  events: Event[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private volunteerService: VolunteerService
  ) {
    this.volunteerId = this.route.snapshot.paramMap.get('id');

    this.volunteerService.getVolunteerById(this.volunteerId).subscribe(data => {
      const entries = Object.entries(data);
      console.log(entries)
      this.volunteerInstance = {
        name: entries[1][1],
        email: entries[2][1],
        contact: entries[6][1],
        address: entries[5][1],
        age: entries[7][1],
        id: entries[0][1]
      };
      console.log(this.volunteerInstance)
    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.events);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
}

export interface Volunteer {
  name: string;
  email: string;
  contact: string;
  age: string;
  address: string;
  id: string;
}
