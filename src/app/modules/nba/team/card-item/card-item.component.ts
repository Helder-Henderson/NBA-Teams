import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() team: any;

  link: string = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  private linkPlayerByTeam() {
    this.link = `${this.team.Key}/player`;
  }

  ngOnInit(): void {
    this.linkPlayerByTeam();
  }
}
