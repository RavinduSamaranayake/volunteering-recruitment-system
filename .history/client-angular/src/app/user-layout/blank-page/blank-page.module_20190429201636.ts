import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

@NgModule({
    imports: [CommonModule, BlankPageRoutingModule,FormsModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
