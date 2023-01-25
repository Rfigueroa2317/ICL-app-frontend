import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team.service';
import { ITeams } from '../Interface/teams';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  teams: ITeams[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => this.teams = teams.slice())
  }

}
