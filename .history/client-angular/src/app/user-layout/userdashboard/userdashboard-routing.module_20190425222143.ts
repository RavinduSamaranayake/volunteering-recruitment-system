import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard.component';

const routes: Routes = [
    {
        path: '', component: UserdashboardComponent,
        children: [
            { path: '', redirectTo: 'projects', pathMatch: 'prefix' },
            { path: 'projects', loadChildren: './c/userdashboard.module#UserdashboardModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserdashboardRoutingModule {
}
