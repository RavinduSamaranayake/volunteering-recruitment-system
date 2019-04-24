import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomepgComponent } from './adminhomepg.component';

const routes: Routes = [
    {
        path: '', component: AdminhomepgComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminhomepgRoutingModule {
}
