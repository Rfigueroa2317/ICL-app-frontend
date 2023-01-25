import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITeams } from '../Interface/teams';
import { TEAMS } from '../mock-data/teams-mock';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private messageService: MessagesService) {}

  getTeams(): Observable<ITeams[]> {
    const teams = of(TEAMS);
    this.messageService.add('TeamService: fetched teams');
    return teams;
  }

  getTeam(id: number): Observable<ITeams> {
    const team = TEAMS.find((t) => t.id === id)!;
    this.messageService.add(`TeamService: fetched team id=${id}`);
    return of(team);
  }
}
