import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Dummy Recipe - Cake #1', 'dummy recipe description', 'https://images.media-allrecipes.com/userphotos/250x250/636110.jpg'),
    new Recipe('Dummy Recipe - Cake #2', 'dummy recipe description 2', 'http://images.media-allrecipes.com/userphotos/250x250/708879.jpg')
  ];
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipeSelected(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }
}
