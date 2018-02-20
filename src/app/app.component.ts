import { Component } from '@angular/core';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  constructor(private router: Router) {
  }

  onMenuSelectedEvent(selectedMenuName) {
    if (selectedMenuName === 'recipes') {
      this.router.navigate(['/recipes']);
    } else if (selectedMenuName === 'shoppingList') {
      this.router.navigate(['/shopping-list']);
    }
  }
}
