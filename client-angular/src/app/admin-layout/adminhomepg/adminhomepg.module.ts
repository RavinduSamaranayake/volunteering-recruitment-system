import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminhomepgRoutingModule } from './adminhomepg-routing.module';
import { AdminhomepgComponent } from './adminhomepg.component';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        AdminhomepgRoutingModule,
    ],
    declarations: [
        AdminhomepgComponent,
    ]
})
export class AdminhomepgModule {}
