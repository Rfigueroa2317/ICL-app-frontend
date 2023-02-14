import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { ITeams } from '../Interface/teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  selectedTeam?: ITeams;

  teams: ITeams[] = [];

  constructor(
    private teamService: TeamService,
  ) {}

  ngOnInit(): void {
  }
}
