import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigatedTo: string;

  onMenuSelectedEvent(selectedMenuName) {
    this.navigatedTo = selectedMenuName;
  }
}
