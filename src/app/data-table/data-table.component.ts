import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() tableHeader: string[];
  @Input() tableValue: Row[];
  constructor() { }

  ngOnInit() {
  }
}


export class Row {
  constructor(value: string[]){
    this.value = value;
  }
  value: string[];
  isFound: boolean;
}