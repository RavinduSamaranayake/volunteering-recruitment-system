import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjeComponent } from './projects.component';

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
