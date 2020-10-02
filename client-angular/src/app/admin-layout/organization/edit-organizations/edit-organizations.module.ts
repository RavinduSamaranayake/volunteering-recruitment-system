import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

import { EditOrganizationsRoutingModule } from './edit-organizations-routing.module';
import { EditOrganizationsComponent } from './edit-organizations.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditOrganizationsComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    EditOrganizationsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class EditOrganizationsModule {}
