import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventRoutingModule } from './edit-event-routing.module';
import { PageHeaderModule } from '../../../shared';
import { EditEventComponent } from './edit-event.component';

@NgModule({
  declarations: [EditEventComponent],
  imports: [
    CommonModule, PageHeaderModule, EditEventRoutingModule
  ]
})
export class EditEventModule { }
