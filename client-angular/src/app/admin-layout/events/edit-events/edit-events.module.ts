import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
} from '@angular/material';

import { EditEventsRoutingModule } from './edit-events-routing.module';
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
export class EditEventsModule {
  constructor() {}
}
