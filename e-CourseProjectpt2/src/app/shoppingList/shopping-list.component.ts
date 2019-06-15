import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared-folder/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Kabab", 5),
    new Ingredient('Tomato', 6)
  ];

  constructor() { }
  
  ngOnInit() {
  }
  
  addIngredientToList(newIng: Ingredient){
    this.ingredients.push(newIng);
  }
}
