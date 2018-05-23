import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-icon',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() isActived: boolean;
  @Input() id: number;
  @Output() rated = new EventEmitter();
  isRated: boolean;
  ngOnInit() {
    this.isRated = false;
  }

  ngOnChanges(){
    this.isRated = this.isActived;
  }
  rate(id: number){
    this.isRated = true;
    this.rated.emit(id);
  }
}
