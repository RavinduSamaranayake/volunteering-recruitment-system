import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NewProjectComponent } from '../club_layout/projects/new-project/new-project.component';
import { ViewProjectsComponent } from '../club_layout/projects/view-projects/view-projects.component';
import { CurrentVolunteersComponent } from '../club_layout/volunteers/current-volunteers/current-volunteers.component';
import { AllVolunteersComponent } from '../club_layout/volunteers/all-volunteers/all-volunteers.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';




@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        FormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot()

    ],
    declarations: [LayoutComponent, SidebarComponent , NewProjectComponent, HeaderComponent, ViewProjectsComponent, CurrentVolunteersComponent, AllVolunteersComponent],
})
export class LayoutModule {}
