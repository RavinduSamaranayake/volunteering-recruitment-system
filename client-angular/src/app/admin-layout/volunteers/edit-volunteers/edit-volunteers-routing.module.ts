import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditVolunteersComponent } from './edit-volunteers.component';

const routes: Routes = [
    {
        path: '',
        component: EditVolunteersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditVolunteersRoutingModule {}
