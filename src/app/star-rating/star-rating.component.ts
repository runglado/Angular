import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  list: number[];
  ratedNumber: number;
  constructor() { }

  ngOnInit() {
    this.list = [1, 2, 3, 4, 5];
  }

  cha(id: number){
    this.ratedNumber = id;
  }
}
