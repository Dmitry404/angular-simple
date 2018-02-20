import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListItemComponent } from './recipes/list/item/recipe-list-item.component';
import { RecipeListComponent } from './recipes/list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/details/recipes-details.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from "./shared/dropdown.directive";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeHomeComponent } from './recipes/recipe-home/recipe-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    PageNotFoundComponent,
    RecipeHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
