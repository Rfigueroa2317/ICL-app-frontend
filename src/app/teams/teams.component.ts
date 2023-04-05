import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { ITeams } from '../Interface/teams';
import { ImageLoader } from '@angular/common';
import { TEAMS } from '../mock-data/teams-mock';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  selectedTeam?: ITeams;
  imgLoad?: ImageLoader;
  ImagePath: string | undefined;

  teams: ITeams[] = [];


  
  constructor(
    private teamService: TeamService,
  ) { }

  

  ngOnInit(): void {
  }
}

export class Teams {
  teams = TEAMS;
}
