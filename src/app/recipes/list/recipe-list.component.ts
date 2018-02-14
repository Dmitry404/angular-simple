import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Dummy Recipe - Cake', 'dummy recipe description', 'https://images.media-allrecipes.com/userphotos/250x250/636110.jpg'),
    new Recipe('Dummy Recipe - Cake', 'dummy recipe description 2', 'https://images.media-allrecipes.com/userphotos/250x250/636110.jpg')
  ];
}
