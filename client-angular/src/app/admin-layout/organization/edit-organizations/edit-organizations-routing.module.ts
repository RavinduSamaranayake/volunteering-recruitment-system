import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditOrganizationsComponent } from './edit-organizations.component';

const routes: Routes = [
    {
        path: '',
        component: EditOrganizationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditOrganizationsRoutingModule {}
