import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventsRoutingModule } from './edit-events-routing.module';
import { PageHeaderModule } from '../../../shared';
import { EditEventsComponent } from './edit-events.component';

@NgModule({
  declarations: [EditEventsComponent],
  imports: [
    CommonModule, PageHeaderModule, EditEventsRoutingModule
  ]
})
export class EditEventsModule { }
