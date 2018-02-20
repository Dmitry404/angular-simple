import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredients: Ingredient[] = [];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
