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
  filteredTeams: Array<any> = [];

  ngOnInit(): void {
    this.getTeams();
  }

  ngOnDestroy(): void {}

  filterByKey(key: string) {
    this.filteredTeams = this.activeTeams.filter((item) => {
      return item.Name.toLocaleLowerCase().indexOf(key) != -1;
    });
  }

  getTeams() {
    this.service.getTeams().subscribe({
      next: (response) => {
        this.activeTeams = response;
        this.filteredTeams = this.activeTeams;
      },
    });
  }
}
