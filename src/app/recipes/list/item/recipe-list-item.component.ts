import { Component, Input } from '@angular/core';
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
})
export class RecipeListItemComponent {
  @Input('recipeInput') recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  recipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
