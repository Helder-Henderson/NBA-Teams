import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { CardItemComponent } from './team/card-item/card-item.component';
import { SearchComponent } from 'src/app/core/search/search.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    TeamComponent,
    CardItemComponent,
    PlayersComponent,
    SearchComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
})
export class NBAModule {}
