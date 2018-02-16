import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = false;
  showShoppingList = false;

  onMenuClickEvent(menuName) {
    if (menuName === 'recipes') {
      this.showRecipes = true;
      this.showShoppingList = false;
    } else if (menuName === 'shoppingList') {
      this.showRecipes = false;
      this.showShoppingList = true;
    } else {
      this.showRecipes = false;
      this.showShoppingList = false;
    }
  }
}
