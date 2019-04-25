import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
// import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, RoutingModule],
    declarations: [TablesComponent]
})
export class TablesModule {}