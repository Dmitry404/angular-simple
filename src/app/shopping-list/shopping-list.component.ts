import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = shoppingListService.getIngredients();
    shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingListService.addIngredient(ingredient);
  }
}
