import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Aplles', 5),
    new Ingredients('Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
