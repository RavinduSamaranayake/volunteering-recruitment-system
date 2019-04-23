import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UserdashboardRoutingModule } from './userdashboard-routing.module';
import { UserdashboardComponent } from './userdashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        UserdashboardRoutingModule,
        StatModule
    ],
    declarations: [
        UserdashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class ashboardModule {}
