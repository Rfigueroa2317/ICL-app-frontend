import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITeams } from '../Interface/teams';
import { TEAMS } from '../mock-data/teams-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor() {}

  getTeams(): Observable<ITeams[]> {
    const teams = of(TEAMS);
    return teams;
  }

  getTeam(id: number): Observable<ITeams> {
    const team = TEAMS.find((t) => t.id === id)!;
    return of(team);
  }
}
