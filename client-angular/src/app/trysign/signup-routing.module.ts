import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrysignComponent } from './trysign.component';

const routes: Routes = [
    {
        path: '', component: TrysignComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
