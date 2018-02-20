import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Dummy Recipe - Cake #1',
      'dummy recipe description',
      'https://images.media-allrecipes.com/userphotos/250x250/636110.jpg',
      [
        new Ingredient('cake', 1),
        new Ingredient('strawberry', 2),
      ]
    ),
    new Recipe(
      'Dummy Recipe - Cake #2',
      'dummy recipe description 2',
      'http://images.media-allrecipes.com/userphotos/250x250/708879.jpg',
      [
        new Ingredient('cake', 1),
        new Ingredient('chocolate bar', 1),
        new Ingredient('fork', 1),
        new Ingredient('plate', 1),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
