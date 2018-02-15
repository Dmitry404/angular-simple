import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-display-even',
  styles: [`
    p {
      color: #ff0000;
    }
  `],
  template: '<p>Even: {{ number }}</p>',
})
export class DisplayEvenComponent {
  @Input() number: number;
}
