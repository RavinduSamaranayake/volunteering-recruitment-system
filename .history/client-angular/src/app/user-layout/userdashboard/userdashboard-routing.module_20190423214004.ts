import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard.component';

const routes: Routes = [
    {
        path: '', component: userdashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
