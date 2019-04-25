import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PComponent } from './projects.component';

const routes: Routes = [
    {
        path: '', component: UserdashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserdashboardRoutingModule {
}
