import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NewProjectComponent } from '../club_layout/projects/new-project/new-project.component';
import { ViewProjectsComponent } from '../club_layout/projects/view-projects/view-projects.component';
import { ProfileComponent } from '../club_layout/profile/profile.component';
import { CurrentVolunteersComponent } from '../club_layout/volunteers/current-volunteers/current-volunteers.component';
import { AllVolunteersComponent } from '../club_layout/volunteers/all-volunteers/all-volunteers.component';
import { ProjectCardComponent } from './projects/view-projects/project-card/project-card.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProjectTableComponent } from './projects/project-table/project-table.component';
import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ReactiveFormsModule,
        FormsModule,
        TimepickerModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PopoverModule.forRoot(),
        AlertModule.forRoot(),
        ModalModule.forRoot()

    ],
    declarations: [LayoutComponent, SidebarComponent , ProjectTableComponent,NewProjectComponent,ProfileComponent, HeaderComponent, ViewProjectsComponent, CurrentVolunteersComponent, AllVolunteersComponent,ProjectCardComponent],
})
export class LayoutModule {}
