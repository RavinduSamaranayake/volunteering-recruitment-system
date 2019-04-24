import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { ULayoutRoutingModule } from './user-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        AdminLayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [AdminLayoutComponent, SidebarComponent , HeaderComponent]
})
export class AdminLayoutModule {}
