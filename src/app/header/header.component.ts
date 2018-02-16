import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() menuClickEvent = new EventEmitter<string>();

  onSelect(menuName: string) {
    this.menuClickEvent.emit(menuName);
  }
}
