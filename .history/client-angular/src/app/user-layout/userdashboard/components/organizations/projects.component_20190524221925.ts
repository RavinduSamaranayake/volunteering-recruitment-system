 import { Component, AfterViewInit, ViewChild } from '@angular/core';
  import { routerTransition } from '../../../router.animations';
  import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
  
  import { OrganizationService } from '../../../myservices/organization.service';
  
  @Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
  })
  export class ProjectsComponent implements AfterViewInit {
    displayedColumns = [
      'name',
      'email',
      'contact',
      'address',
      'regNo',
      'options'
    ];
    dataSource: MatTableDataSource<Organization>;
    organizations: Organization[] = [];
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(private organizationService: OrganizationService) {
      // Create Events
      let organizationInstance: Organization;
  
      this.organizationService.getAllOrganizations().subscribe(data => {
        const entries = Object.entries(data);
        entries.forEach(instance => {
          organizationInstance = {
            name: instance[1].name,
            email: instance[1].email,
            contact: instance[1].contact,
            address: instance[1].address,
            regNo: instance[1].regNo,
            id: instance[1]._id
          };
          // this.organizations.push(organizationInstance);
          this.dataSource.data = [...this.dataSource.data, organizationInstance];
        });
      });
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(this.organizations);
    }
  
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
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
  export interface Organization {
    name: string;
    email: string;
    contact: string;
    address: string;
    regNo: string;
    id: string;
  }
  