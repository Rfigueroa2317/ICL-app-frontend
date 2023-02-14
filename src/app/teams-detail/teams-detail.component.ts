import { Component, Input, OnInit } from '@angular/core';
import { ITeams } from '../Interface/teams';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../service/team.service';

@Component({
  selector: 'app-teams-detail',
  templateUrl: './teams-detail.component.html',
  styleUrls: ['./teams-detail.component.scss'],
})
export class TeamsDetailComponent implements OnInit {
  @Input() team?: ITeams;
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }
}
