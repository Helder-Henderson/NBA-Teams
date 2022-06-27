import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NBAService {

  url : string = "https://api.sportsdata.io/v3/nba/scores/json/teams?key=7ede17047f33498b923cc8a80c2d273a"
  constructor(private httpClient: HttpClient ) { }

  getTeams(): Observable<any> {
    return this.httpClient.get(this.url)
  }


}
