import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditVolunteerComponent } from './edit-volunteer.component';

const routes: Routes = [
    {
        path: '',
        component: EditVolunteerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditVolunteerRoutingModule {}
