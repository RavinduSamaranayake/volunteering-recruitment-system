import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditOrganizationComponent } from './edit-organization.component';

const routes: Routes = [
    {
        path: '',
        component: EditOrganizationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewOrganizationRoutingModule {}
