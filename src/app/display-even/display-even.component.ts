import { Component } from '@angular/core';

@Component({
  selector: 'app-game-display-even',
  styles: [`
    p {
      color: #ff0000;
    }
  `],
  template: '<p>Even: <ng-content></ng-content></p>',
})
export class DisplayEvenComponent {

}
