import { Component, OnDestroy, OnInit } from '@angular/core';
import { NBAService } from '../service/nba.service';

@Component({
  selector: 'app-nba',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, OnDestroy {
  constructor(private service: NBAService) {}

  activeTeams: Array<any> = [];

  ngOnInit(): void {
    this.getTeams();
  }

  ngOnDestroy(): void {}

  search(key: any) {
    console.log(key);
  }

  getTeams() {
    this.service.getTeams().subscribe({
      next: (response) => {
        console.log(response);
        this.activeTeams = response;
      },
    });
  }
}
