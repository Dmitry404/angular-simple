import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() menuClickEvent = new EventEmitter<string>();

  onRecipesClick() {
    this.menuClickEvent.emit('recipes');
  }

  onShoppingListClick() {
    this.menuClickEvent.emit('shoppingList');
  }
}
