import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
})
export class RecipeListItemComponent {
  @Input('recipeInput') recipe: Recipe;
  @Output() recipeSelectedEvent = new EventEmitter<void>();

  recipeSelected() {
    this.recipeSelectedEvent.emit();
  }
}
