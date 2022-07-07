import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchKey = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitKeyPressioned(filter: string) {
    this.searchKey.emit(filter);
  }
}
