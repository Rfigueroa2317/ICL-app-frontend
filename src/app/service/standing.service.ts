import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStandings } from '../Interface/standings';
import { STANDINGS } from '../mock-data/standings-mock';

@Injectable({
  providedIn: 'root',
})
export class StandingService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor() {}

  getStandings(): Observable<IStandings[]> {
    const standing = of(STANDINGS);
    return standing;
  }

  getStanding(id: number): Observable<IStandings> {
    const standing = STANDINGS.find((s) => s.id === id)!;
    return of(standing);
  }
}
