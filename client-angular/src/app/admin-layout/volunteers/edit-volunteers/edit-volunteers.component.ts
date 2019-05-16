import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { VolunteerService } from '../../../myservices/volunteer.service';

@Component({
  selector: 'app-edit-volunteers',
  templateUrl: './edit-volunteers.component.html',
  styleUrls: ['./edit-volunteers.component.scss'],
  animations: [routerTransition()]
})
export class EditVolunteersComponent implements AfterViewInit  {
  displayedColumns = [
    'name',
    'email',
    'contactNo',
    'age',
    'address',
    'options'
  ];
  dataSource: MatTableDataSource<Volunteer>;
  volunteers: Volunteer[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private volunteerService: VolunteerService) {
    let volunteerInstance: Volunteer;

    this.volunteerService.getAllVolunteers().subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(instance => {
        console.log(instance);
        volunteerInstance = {
          name: instance[1].name,
          email: instance[1].email,
          contactNo: instance[1].cntctmob,
          age: instance[1].age,
          address: instance[1].address,
          id:  instance[1]._id,
        };
        // this.volunteers.push(volunteerInstance);
        this.dataSource.data = [...this.dataSource.data, volunteerInstance];
      });
    });
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.volunteers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Volunteer {
  name: string;
  email: string;
  contactNo: string;
  age: string;
  address: string;
  id: string;
}
