import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserashboardComponent } from './userdashboard.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
