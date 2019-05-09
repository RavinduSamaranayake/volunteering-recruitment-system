import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditVolunteersRoutingModule } from './edit-volunteers-routing.module';
import { EditVolunteersComponent } from './edit-volunteers.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
  declarations: [EditVolunteersComponent],
  imports: [
    CommonModule, PageHeaderModule, EditVolunteersRoutingModule
  ]
})
export class EditVolunteersModule { }
