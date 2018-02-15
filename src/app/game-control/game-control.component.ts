import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  private counter = 0;
  private intervalRef;
  @Output() gameActionEvent = new EventEmitter<{counter: number}>();

  onGameStart() {
    this.intervalRef = setInterval(this.fireGameAction, 1000);
  }

  private fireGameAction = () => {
    this.gameActionEvent.emit({
      counter: this.counter++
    });
  }

  onGameStop() {
    clearInterval(this.intervalRef);
  }
}
