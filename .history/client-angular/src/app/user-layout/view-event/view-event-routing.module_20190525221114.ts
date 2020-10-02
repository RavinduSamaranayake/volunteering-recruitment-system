import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEventComponent } from './edit-event.component';

const routes: Routes = [
    {
        path: '',
        component: EditEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventRoutingModule {}
