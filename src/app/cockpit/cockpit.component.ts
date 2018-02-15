import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent {
  // serverName: string;
  serverContent: string;
  @ViewChild('serverNameInput') serverNameInputElementRef: ElementRef;

  // @Output('srvCreated') this is an alias
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContent
    });
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({
      blueprintName: this.serverNameInputElementRef.nativeElement.value,
      blueprintContent: this.serverContent
    });
  }

}
