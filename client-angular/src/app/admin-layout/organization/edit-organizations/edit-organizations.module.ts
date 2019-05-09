import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOrganizationsRoutingModule } from './edit-organizations-routing.module';
import { EditOrganizationsComponent } from './edit-organizations.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditOrganizationsComponent],
  imports: [
    CommonModule, PageHeaderModule, EditOrganizationsRoutingModule
  ]
})
export class EditOrganizationsModule { }
