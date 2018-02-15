import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent {
  serverName: string;
  serverContent: string;

  // @Output('srvCreated') this is an alias
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.serverName,
      blueprintContent: this.serverContent
    });
  }

}
