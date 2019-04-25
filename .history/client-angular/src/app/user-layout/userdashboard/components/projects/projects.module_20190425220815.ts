import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule],
    declarations: [TablesComponent]
})
export class TablesModule {}