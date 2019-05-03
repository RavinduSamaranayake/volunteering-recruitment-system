import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOrganizationRoutingModule } from './add-organization-routing.module';
import { AddOrganizationComponent } from './add-organization.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  declarations: [AddOrganizationComponent],
  imports: [
    CommonModule, PageHeaderModule, AddOrganizationRoutingModule
  ]
})
export class AddOrganizationModule { }
