import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NBAService } from '../service/nba.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  constructor(private service: NBAService, private router: ActivatedRoute) {}

  private teamSelectedName?: string | null;

  private filteredPlayers: Array<any> = [];
  get getFilteredPlayers(): Array<any> {
    return this.filteredPlayers;
  }

  players: Array<any> = [];

  private playersByTeamSelected: Array<any> = [];
  get getPlayersByTeamSelected(): Array<any> {
    return this.playersByTeamSelected;
  }

  getPlayersByTeam() {
    this.service
      .getPlayersByTeam(this.teamSelectedName)
      .subscribe((response) => {
        this.players = response;
        this.filteredPlayers = this.players;
        console.log(response);
      });
  }

  ngOnInit(): void {
    this.teamSelectedName = this.router.snapshot.paramMap.get('id');
    this.getPlayersByTeam();
  }

  filterByKey(key: string) {
    this.filteredPlayers = this.players.filter((player) => {
      return (
        player.FanDuelName?.toLocaleLowerCase().indexOf(
          key.toLocaleLowerCase().trim()
        ) != -1
      );
    });
  }
}
