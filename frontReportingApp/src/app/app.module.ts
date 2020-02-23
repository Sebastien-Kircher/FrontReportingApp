import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { UserService } from './services/user.service';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AppareilService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
