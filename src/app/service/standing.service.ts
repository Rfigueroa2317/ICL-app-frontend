import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStandings } from '../Interface/standings';
import { STANDINGS } from '../mock-data/standings-mock';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class StandingService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private messageService: MessagesService) {}

  getStandings(): Observable<IStandings[]> {
    const standing = of(STANDINGS);
    this.messageService.add('TeamService: fetched teams');
    return standing;
  }

  getStanding(id: number): Observable<IStandings> {
    const standing = STANDINGS.find((s) => s.id === id)!;
    this.messageService.add(`StandingService: fetched standing id=${id}`);
    return of(standing);
  }
}
