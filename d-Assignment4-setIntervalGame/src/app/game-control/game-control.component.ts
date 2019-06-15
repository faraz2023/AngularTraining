import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  i : number = 0;
  @Output() intervalFired= new EventEmitter<number>();
  @Output() intervalStopped= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onStart(){
  this.interval = setInterval(()=>{
    this.intervalFired.emit(this.i);
    this.i++;
  }, 200)
  }

  onStop(){
    clearInterval(this.interval);
    this.i = 0;
    this.intervalStopped.emit(0);
  }
}
