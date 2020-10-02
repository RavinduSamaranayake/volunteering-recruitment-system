import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrganizationComponent } from './add-organization.component';

const routes: Routes = [
    {
        path: '',
        component: AddOrganizationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddOrganizationRoutingModule {}
