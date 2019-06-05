
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';

import { ProjectsRoutingModule } from './projects-routing.module';
import { PageHeaderModule } from '../../../../shared';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    ProjectsRoutingModule,
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
