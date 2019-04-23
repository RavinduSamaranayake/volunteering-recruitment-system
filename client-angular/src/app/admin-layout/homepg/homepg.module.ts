import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepgRoutingModule } from './routing.module';
import { HomepgComponent } from './home.component';
 
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        HomepgRoutingModule
    ],
    declarations: [
        HomepgComponent,
         
    ]
})
export class HomepgModule {}
