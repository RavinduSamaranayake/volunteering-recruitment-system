import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  } from '@angular/material';
import { SlcteventRoutingModule } from './organization-routing.module';
import { ProjectsComponent } from './projects.component';
// import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,
             SlcteventRoutingModule,
             MatFormFieldModule,
             MatInputModule,
             MatTableModule,
             MatPaginatorModule,
             MatSortModule
            ],
    declarations: [ProjectsComponent]
})

export class OrganizationModule {}
