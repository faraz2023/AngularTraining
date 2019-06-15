import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//notice that we have imported forms for the Froms purposes
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShoppingList} from './shoppingList/shopping-list.component';
import { ShoppingListEditCompComponent } from './shoppingList/shopping-list-edit-comp/shopping-list-edit-comp.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    ShoppingList,
    AppComponent,
    ShoppingListEditCompComponent,
    HeaderCompComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  //see how I have imported FormsModule here too
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
