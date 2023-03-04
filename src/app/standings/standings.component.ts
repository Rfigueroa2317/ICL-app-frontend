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
    {id: 1, team: 'one', win: 0, loss: 0, draw: 0},
    {id: 2, team: 'two', win: 0, loss: 0, draw: 0},
    {id: 3, team: 'three', win: 0, loss: 0, draw: 0},
    {id: 4, team: 'four', win: 0, loss: 0, draw: 0},
    {id: 5, team: 'five', win: 0, loss: 0, draw: 0}
  ];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {

  }

  displayedColums: string[] = ['id','team','win','loss','draw'];
  dataSource = this.STANDINGS_DATA;

}