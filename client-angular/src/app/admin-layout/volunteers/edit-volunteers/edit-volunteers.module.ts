import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

import { EditVolunteersRoutingModule } from './edit-volunteers-routing.module';
import { EditVolunteersComponent } from './edit-volunteers.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditVolunteersComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    EditVolunteersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EditVolunteersModule {}
