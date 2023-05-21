import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CorLibModule } from 'cor-lib';

@NgModule({
  declarations: [AppComponent,LoginComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule,FormsModule,CorLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
