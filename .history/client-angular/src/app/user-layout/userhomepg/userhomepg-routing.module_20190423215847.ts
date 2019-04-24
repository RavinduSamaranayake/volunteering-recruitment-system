import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomepgComponent } from './userhomepg.component';

const routes: Routes = [
    {
        path: '', component: UserhomepgComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepgRoutingModule {
}
