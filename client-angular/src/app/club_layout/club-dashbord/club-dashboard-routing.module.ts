import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubDashbordComponent } from './club-dashbord.component';

const routes: Routes = [
    {
        path: '', component: ClubDashbordComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClubDashbordRoutingModule {
}
