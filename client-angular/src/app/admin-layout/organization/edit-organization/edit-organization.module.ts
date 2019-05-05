import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOrganizationRoutingModule } from './edit-organization-routing.module';
import { EditOrganizationComponent } from './edit-organization.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditOrganizationComponent],
  imports: [
    CommonModule, PageHeaderModule, EditOrganizationRoutingModule
  ]
})
export class EditOrganizationModule { }
 