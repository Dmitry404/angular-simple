import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { NgModule } from "@angular/core";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeHomeComponent } from "./recipes/recipe-home/recipe-home.component";
import { RecipeDetailsComponent } from "./recipes/details/recipes-details.component";

const appRoutes : Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeHomeComponent },
      { path: ':id', component: RecipeDetailsComponent },
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
