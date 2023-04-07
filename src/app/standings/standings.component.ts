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

  // id: number;
  //   team: string;
  //   win: number;
  //   loss: number;
  //   draw: number;

  STANDINGS_DATA: IStandings[] = [
    { id: 1, team: 'Brawns', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 2, team: 'Foresters', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 3, team: 'Nightmares', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 4, team: 'Ice Caps', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 5, team: 'Flames', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 6, team: 'Dragons', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 7, team: 'Brainiacs', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
    { id: 8, team: 'Salty Crew', win: 0, loss: 0, draw: 0, pf: 0, pa: 0 },
  ];

  constructor(private standingService: StandingService) { }

  ngOnInit(): void {

  }

  displayedColums: string[] = ['id', 'team', 'win', 'loss', 'draw', 'pf', 'pa'];
  dataSource = this.STANDINGS_DATA;

}