import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './modules/nba/players/players.component';
import { TeamComponent } from './modules/nba/team/team.component';

const routes: Routes = [
  {
    path: 'nba/team',
    component: TeamComponent,
    title: 'NBA Teams',
  },
  {
    path: 'nba/team/:id/player',
    component: PlayersComponent,
    title: 'NBA Player',
  },
  { path: '', redirectTo: 'nba/team', pathMatch: 'full' }, //
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
