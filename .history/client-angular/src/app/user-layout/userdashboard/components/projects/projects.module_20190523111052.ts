// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { ProjectsRoutingModule } from './projects-routing.module';
// import { ProjectsComponent } from './projects.component';
// // import { PageHeaderModule } from './../../shared';

// @NgModule({
//     imports: [CommonModule, ProjectsRoutingModule],
//     declarations: [ProjectsComponent]
// })

// export class ProjectsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';

import { PRoutingModule } from './edit-events-routing.module';
import { PageHeaderModule } from '../../../shared';
import { EditEventsComponent } from './edit-events.component';

@NgModule({
  declarations: [EditEventsComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    EditEventsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class ProjectsModule {
  constructor() {}
}
