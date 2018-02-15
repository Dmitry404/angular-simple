import { Component } from '@angular/core';

@Component({
  selector: 'app-game-display-odd',
  styles: [`
    p {
      color: #0000ff;
    }
  `],
  template: '<p>Odd: <ng-content></ng-content></p>',
})
export class DisplayOddComponent {
}
