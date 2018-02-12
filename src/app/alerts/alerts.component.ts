import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  styles: [`
    .app-alerts {
      padding: 5px 0;
    }
  `],
  template: `
    <div class="app-alerts">
      <app-alerts-success></app-alerts-success>
      <app-alerts-warning></app-alerts-warning>
    </div>
  `
})
export class AlertsComponent {
}
