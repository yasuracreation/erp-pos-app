import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from '../main/main.component';
import { HeaderLibModule } from 'header-lib';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    HeaderLibModule
  ],
  declarations: [
    MainComponent,
    DashboardComponent
  ]
})
export class PageModule { }
