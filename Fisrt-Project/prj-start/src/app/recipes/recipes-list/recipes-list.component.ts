import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.models';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Teste Recipe', 'This is simply a test',
     'https://i2.wp.com/www.chocolatesuze.com/wp-content/uploads/2019/09/Strawberry-Crumb-Bar-Recipe-innards2.jpg?resize=1700%2C1130'),
     new Recipe('A Teste Recipe', 'This is simply a test',
     'https://i2.wp.com/www.chocolatesuze.com/wp-content/uploads/2019/09/Strawberry-Crumb-Bar-Recipe-innards2.jpg?resize=1700%2C1130')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
