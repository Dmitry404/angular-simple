import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Dummy Recipe - Cake #1', 'dummy recipe description', 'https://images.media-allrecipes.com/userphotos/250x250/636110.jpg'),
    new Recipe('Dummy Recipe - Cake #2', 'dummy recipe description 2', 'http://images.media-allrecipes.com/userphotos/250x250/708879.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
