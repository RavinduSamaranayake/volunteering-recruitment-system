import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProComponent } from './projects.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent]
})
export class TablesModule {}