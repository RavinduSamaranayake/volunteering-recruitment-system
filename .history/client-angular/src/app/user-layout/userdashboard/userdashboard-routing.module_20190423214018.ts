import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard.component';

const routes: Routes = [
    {
        path: '', component: UserdashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ashboardRoutingModule {
}
