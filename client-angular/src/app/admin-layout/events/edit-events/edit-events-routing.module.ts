import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEventsComponent } from './edit-events.component';

const routes: Routes = [
    {
        path: '',
        component: EditEventsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditEventsRoutingModule {}
