import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Teste Recipe', 'This is simply a test',
     'https://i2.wp.com/www.chocolatesuze.com/wp-content/uploads/2019/09/Strawberry-Crumb-Bar-Recipe-innards2.jpg?resize=1700%2C1130'),
     new Recipe('A Teste Recipe @@@@@@2', 'This is simply a test',
     'https://i2.wp.com/www.chocolatesuze.com/wp-content/uploads/2019/09/Strawberry-Crumb-Bar-Recipe-innards2.jpg?resize=1700%2C1130')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
