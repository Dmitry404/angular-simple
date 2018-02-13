import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getColorClass() {
    return this.serverStatus === 'online' ? 'online' : 'offline';
  }

  isServerOnline() {
    return this.serverStatus === 'online';
  }
}
