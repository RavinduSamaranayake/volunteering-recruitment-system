import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditVolunteerRoutingModule } from './edit-volunteer-routing.module';
import { EditVolunteerComponent } from './edit-volunteer.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditVolunteerComponent],
  imports: [
    CommonModule, PageHeaderModule, EditVolunteerRoutingModule
  ]
})
export class EditVolunteerModule { }
