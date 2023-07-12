import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { StandingsComponent } from './standings/standings.component';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'standings',
    component: StandingsComponent
  },
  {
    path: 'matches',
    component: MatchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
