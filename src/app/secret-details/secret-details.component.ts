import { Component } from '@angular/core';

@Component({
  selector: 'app-secret-details',
  styles: [`
    .colored {
      color: #ffffff;
    }
  `],
  templateUrl: './secret-details.component.html',
})
export class SecretDetailsComponent {
  detailsVisible = false;
  detailsClickedLog = [];

  toggleDisplayDetails() {
    this.detailsVisible = !this.detailsVisible;
    if (this.detailsVisible === true) {
      this.detailsClickedLog.push(new Date());
    }
  }

  private shouldColorSecretLog() {
    return this.detailsClickedLog.length >= 5;
  }
}
