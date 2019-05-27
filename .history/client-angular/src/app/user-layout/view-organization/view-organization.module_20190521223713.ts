import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOrganizationRoutingModule } from './edit-organization-routing.module';
import { EditOrganizationComponent } from './edit-organization.component';
import { PageHeaderModule } from '../../../shared';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [EditOrganizationComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    EditOrganizationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EditOrganizationModule {}
