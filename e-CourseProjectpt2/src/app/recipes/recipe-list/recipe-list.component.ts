import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipesArray: Recipe[] = [
    new Recipe('Godzilla', 'Eat a delicious Godzilla', 'https://tinyurl.com/y2ybt2n5'),
    new Recipe('KingKong', 'Eat a beatiful KingKong', 'https://tinyurl.com/y47lyxtb')
  ];
  constructor() { }

  ngOnInit() {
  }

  showDetail(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
