import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  constructor(public name: string, public desription: string, public imagePath: string, public ingredients: Ingredient[]) {
  }
}
