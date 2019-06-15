import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipesArray: Recipe[] = [
    new Recipe('Godzilla', 'Eat a delicious Godzilla', 'https://tinyurl.com/y2ybt2n5'),
    new Recipe('KingKong', 'Eat a beatiful KingKong', 'https://tinyurl.com/y47lyxtb')
  ];
  constructor() { }

  ngOnInit() {
  }

}
