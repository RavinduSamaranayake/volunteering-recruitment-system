import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'homepg', loadChildren: './adminhomepg/adminhomepg.module#AdminhomepgModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },

            { path: 'organizations/add', loadChildren: './organization/add-organization/add-organization.module#AddOrganizationModule' },
            { path: 'organizations/edit', loadChildren: './organization/edit-organizations/edit-organizations.module#EditOrganizationsModule' },
            { path: 'organizations/edit/:id', loadChildren: './organization/edit-organization/edit-organization.module#EditOrganizationModule' },

            { path: 'volunteers/edit', loadChildren: './volunteers/edit-volunteers/edit-volunteers.module#EditVolunteersModule' },
            { path: 'volunteers/edit/:id', loadChildren: './volunteers/edit-volunteer/edit-volunteer.module#EditVolunteerModule' },

            { path: 'events/edit', loadChildren: './events/edit-events/edit-events.module#EditEventsModule' },
            { path: 'events/edit/:id', loadChildren: './events/edit-event/edit-event.module#EditEventModule' },

           // { path: 'forms', loadChildren: './form/form.module#FormModule' },
           // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
           // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
           // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
           // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule {}
