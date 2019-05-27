import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';

const routes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            { path: '', redirectTo: 'userdashboard', pathMatch: 'prefix' },
            { path: 'userdashboard', loadChildren: './userdashboard/userdashboard.module#UserdashboardModule' },
            { path: 'userhomepg', loadChildren: './userhomepg/userhomepg.module#UserhomepgModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'change-password', loadChildren: './change-password/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'profile-page', loadChildren: './change-profile/blank-page.module#BlankPageModule' },
            { path: 'view-event/:id', loadChildren: './view-event/view-event.module#ViewEventModule' },
            { path: 'view-organize/:id', loadChildren: './view-organization/view-organization.module#ViewOrganizationModule' },
            { path: 'notify-going/:id', loadChildren: './notify-going/notify-going.module#NotifyGoingModule' },
            { path: 'notify-delete/:id', loadChildren: './notify-delete/view-event.module#NotifyDeleteModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserLayoutRoutingModule {}
