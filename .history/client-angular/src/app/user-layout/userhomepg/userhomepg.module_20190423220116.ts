import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserhomepgRoutingModule } from './userhomepg-routing.module';
import { HomepgComponent } from './.component';
 
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomepgRoutingModule,
    
    ],
    declarations: [
        HomepgComponent,
         
    ]
})
export class HomepgModule {}
