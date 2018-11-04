import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppRoutingModule } from './app-routing.module';
import { API_BASE_URL } from './app.api';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {UserdetailComponent} from './components/userdetail/userdetail.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
         HomeComponent,
         NavbarComponent,
         DashboardComponent,
         UserdetailComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        GoogleChartsModule,
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US },
        { provide: API_BASE_URL, useFactory: baseUrl },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

export function baseUrl(): string {
    return window.location.origin + '/api';
}
