import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  
  @Output() search = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  searchKey(key: string){
    console.log("KEY Pressioned:",key)
    this.search.emit(key)
  }
}
