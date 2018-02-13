import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  styleUrls: ['./server.component.css'],
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'online';

  getServerStatus() {
    return this.serverStatus;
  }
}
