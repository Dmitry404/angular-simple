import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  private counter = 0;
  private intervalRef;
  @Output() gameActionEvent = new EventEmitter<number>();

  onGameStart() {
    this.intervalRef = setInterval(() => {
      this.gameActionEvent.emit(this.counter++);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.intervalRef);
  }
}
