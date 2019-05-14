import { Component, OnInit, ViewChild } from "@angular/core";
import { routerTransition } from "../../../router.animations";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

import { EventService } from "../../../myservices/event.service";

@Component({
  selector: "app-edit-events",
  templateUrl: "./edit-events.component.html",
  styleUrls: ["./edit-events.component.scss"],
  animations: [routerTransition()]
})
export class EditEventsComponent implements OnInit {
  displayedColumns = [
    "Title",
    "Organization",
    "Description",
    "Date",
    "Options"
  ];
  dataSource: MatTableDataSource<event>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private eventservice: EventService) {
    const events: event[] = [];
    var eventInstance: event;

    this.eventservice.getAllEvent().subscribe(data => {
      const entries = Object.entries(data);
      entries.forEach(instance => {
        eventInstance = {
          title: instance[1].title,
          organization: instance[1].organization,
          description: instance[1].description,
          date: instance[1].date,
          id: instance[1]._id
        };
        events.push(eventInstance);
      });
    });

    this.dataSource = new MatTableDataSource(events);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface event {
  title: string;
  organization: string;
  description: string;
  date: string;
  id: string;
}
