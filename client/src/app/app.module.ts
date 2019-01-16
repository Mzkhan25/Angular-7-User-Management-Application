import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GraphsComponent } from './graphs/graphs.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdduserComponent,
    UserDetailsComponent,
    GraphsComponent,
    NavComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    TableModule,
    ChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
