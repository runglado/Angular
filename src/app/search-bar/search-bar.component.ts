import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() defaultText: string;
  @Output() search = new EventEmitter();
  searchText: string;
  gender: string;
  constructor() { }

  ngOnInit() {
    this.searchText = "Truong";
    this.gender = "Nu";
  }
}
