import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';

import { SignupRoutingModule } from './signup-routing.module';
import { TrysignComponent } from './trysign.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    // AlertsModule.forRoot()
  ],
  declarations: [TrysignComponent]
})
export class SignupModule { }
