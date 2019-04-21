import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { TrysignComponent } from './trysign.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
  ],
  declarations: [TrysignComponent]
})
export class SignupModule { }
