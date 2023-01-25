import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../service/messages.service';
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
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(team: ITeams): void {
    this.selectedTeam = team;
    this.messageService.add(`TeamsComponent: Selected team id=${team.id}`);
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
  }
}
