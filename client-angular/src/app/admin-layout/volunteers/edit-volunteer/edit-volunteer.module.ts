import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditVolunteerRoutingModule } from './edit-volunteer-routing.module';
import { EditVolunteerComponent } from './edit-volunteer.component';
import { PageHeaderModule } from '../../../shared';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [EditVolunteerComponent],
  imports: [
    CommonModule, PageHeaderModule, EditVolunteerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EditVolunteerModule { }
