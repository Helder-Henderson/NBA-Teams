import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss'],
})
export class CardPlayerComponent implements OnInit {
  @Input() player: any;

  constructor() {}

  ngOnInit(): void {}
}
