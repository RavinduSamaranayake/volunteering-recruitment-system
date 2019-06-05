import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { routerTransition } from '../../router.animations';

import { OrganizationService } from '../../myservices/organization.service';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.scss'],
  animations: [routerTransition()]
})
export class EditOrganizationComponent implements AfterViewInit {
  public organizationInstance: Organization = {
    name: '',
    email: '',
    contact: '',
    address: '',
    regNo: '',
    id: '',
    about: '',
    blocked: false,
  };
  public organizationId: string = '';
  displayedColumns = [
    'id',
    'title',
    'description',
    'date',
    'options'
  ];
  dataSource: MatTableDataSource<Event>;
  events: Event[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService
  ) {
    this.organizationId = this.route.snapshot.paramMap.get('id');
    let eventInstance: Event;

    this.organizationService
      .getOrganizationEvents(this.organizationId)
      .subscribe(data => {
        const entries = Object.entries(data);
        entries.forEach(instance => {
          eventInstance = {
            title: instance[1].title,
            organization: instance[1].organization,
            description: instance[1].about,
            date: instance[1].date,
            id: instance[1]._id
          };
          this.dataSource.data = [...this.dataSource.data, eventInstance];
        });
        // // Assign the data to the data source for the table to render

        this.organizationService
          .getOrganizationById(this.organizationId)
          .subscribe(data => {
            console.log('ddddddddddddddddddddddddddddddddd...',data)
            const entries = Object.entries(data);
            console.log(entries)
            this.organizationInstance = {
              name: data.name,
              email: data.,
              contact: entries[3][1],
              address: entries[4][1],
              regNo: entries[6][1],
              id: entries[0][1],
              about: entries[6][1],
              blocked: true
            };
          });
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

  editAccess(){
    this.organizationInstance.blocked = !this.organizationInstance.blocked;
    this.organizationService.editAccessOrganization(this.organizationInstance).subscribe();
  }
}

export interface Event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
}

export interface Organization {
  name: string;
  email: string;
  contact: string;
  address: string;
  regNo: string;
  id: string;
  about: string;
  blocked: boolean;
}
