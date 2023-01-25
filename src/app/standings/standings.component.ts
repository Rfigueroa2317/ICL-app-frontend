import { Component, OnInit } from '@angular/core';
import { IStandings } from '../Interface/standings';
import { StandingService } from '../service/standing.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent implements OnInit {
  selectedStanding?: IStandings;

  standings: IStandings[] = [];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    this.getStandings();
  }

  onSelect(standing: IStandings): void {
    this.selectedStanding = standing;
  }

  getStandings(): void {
    this.standingService
      .getStandings()
      .subscribe((standing) => (this.standings = standing));
  }
}
