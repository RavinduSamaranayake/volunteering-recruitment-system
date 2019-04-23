import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        UserLayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent , HeaderComponent]
})
export class AdminLayoutModule {}
