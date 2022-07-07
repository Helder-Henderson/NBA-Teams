import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NBAService {
  private readonly key = '?key=7ede17047f33498b923cc8a80c2d273a';

  constructor(private httpClient: HttpClient) {}

  getTeams(): Observable<any> {
    return this.httpClient.get(
      'https://api.sportsdata.io/v3/nba/scores/json/teams' + this.key
    );
  }

  getPlayersByTeam(teamCode?: string | null): Observable<any> {
    return this.httpClient.get(
      `https://api.sportsdata.io/v3/nba/scores/json/Players/${teamCode}` +
        this.key
    );
  }
}
