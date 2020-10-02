import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlcteventRoutingModule } from './slctevent-routing.module';
import { ProjectsComponent } from './projects.component';
// import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, SlcteventRoutingModule],
    declarations: [ProjectsComponent]
})

export class SlcteventModule {}