import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number [] = [];
  evenNumbers: number [] = [];

  onGameActionEvent(gameAction) {
    if (gameAction.counter % 2 === 0) {
      this.evenNumbers.push(gameAction.counter);
    } else {
      this.oddNumbers.push(gameAction.counter);
    }
  }
}
