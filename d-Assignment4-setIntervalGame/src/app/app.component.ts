import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'assignment4';

  oddElements: number[] = [];
  evenElements = [];

  onIntervalFired(firedNum: number){
    if(firedNum % 2 == 0){
      this.evenElements.push(firedNum)
    }
    else{
      this.oddElements.push(firedNum);
    }
  }

  onIntervalStopped(stopped: number){
    this.oddElements = [];
    this.evenElements = [];
  }
}
