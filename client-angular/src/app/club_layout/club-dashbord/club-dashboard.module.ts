import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ClubDashbordRoutingModule } from './club-dashboard-routing.module';
import { ClubDashbordComponent } from './club-dashbord.component';
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
        ClubDashbordRoutingModule,
        StatModule
    ],
    declarations: [
        ClubDashbordComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class ClubDashboardModule {}
