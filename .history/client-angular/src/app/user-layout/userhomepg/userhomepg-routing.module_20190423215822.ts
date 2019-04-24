import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepgComponent } from './.component';

const routes: Routes = [
    {
        path: '', component: HomepgComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepgRoutingModule {
}
