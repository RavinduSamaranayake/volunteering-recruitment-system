import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NewProjectComponent } from '../club_layout/projects/new-project/new-project.component';
import { ViewProjectsComponent } from '../club_layout/projects/view-projects/view-projects.component';
import { CurrentVolunteersComponent } from '../club_layout/volunteers/current-volunteers/current-volunteers.component';
import { AllVolunteersComponent } from '../club_layout/volunteers/all-volunteers/all-volunteers.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'clubdashboard', pathMatch: 'prefix' },
            { path: 'clubdashboard', loadChildren: './club-dashbord/club-dashboard.module#ClubDashboardModule' },
            { path: 'homepg', loadChildren: './homepg/homepg.module#HomepgModule' },
            { path: 'newProject', component : NewProjectComponent },
            { path: 'viewProject', component : ViewProjectsComponent },
            { path: 'currentVolunteers', component : CurrentVolunteersComponent },
            { path: 'allVolunteers', component : AllVolunteersComponent },
            { path: 'profile', component : ProfileComponent },
            {path:  'edit/:eventId',component:NewProjectComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
