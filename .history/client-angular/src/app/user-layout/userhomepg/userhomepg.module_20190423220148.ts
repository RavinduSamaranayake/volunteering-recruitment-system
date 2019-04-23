import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserhomepgRoutingModule } from './userhomepg-routing.module';
import { UserhomepgComponent } from './userhomepg.component';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        UserhomepgRoutingModule,
    
    ],
    declarations: [
        HomepgComponent,
         
    ]
})
export class HomepgModule {}
