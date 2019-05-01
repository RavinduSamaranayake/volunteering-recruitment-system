import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertsModule } from 'angular-alert-module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {ValidateService} from './myservices/validate.service';
import {AuthService} from './myservices/auth.service';
import {EventService} from './myservices/event.service';
import {CalendarLocalModule} from './admin-layout/calendar/calendar.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';


// import { HeaderComponent } from './layout/components/header/header.component';

// const appRoutes: Routes =  [
//     {path: 'register', component: TrysignComponent}, ];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        FormsModule,
        CalendarLocalModule,
        AlertsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        PopoverModule.forRoot()
    ],

    declarations: [AppComponent ],
    providers: [AuthGuard, ValidateService, AuthService, EventService],

    bootstrap: [AppComponent]
})
export class AppModule {}