import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { TeamsDetailComponent } from './teams-detail/teams-detail.component';
import { StandingsComponent } from './standings/standings.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    HomeComponent,
    TeamsDetailComponent,
    StandingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
