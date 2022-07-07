import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() team: any;

  link: string = '';
  constructor() {}

  private linkPlayerByTeam() {
    this.link = `${this.team.Key}/player`;
  }

  ngOnInit(): void {
    this.linkPlayerByTeam();
  }
}
