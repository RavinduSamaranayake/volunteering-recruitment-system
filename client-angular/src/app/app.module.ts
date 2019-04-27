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


        AlertsModule.forRoot()
    ],
    declarations: [AppComponent, ],
    providers: [AuthGuard, ValidateService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
