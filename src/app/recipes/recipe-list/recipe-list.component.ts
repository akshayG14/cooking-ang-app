import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Dosa',
      'Dosa recipe',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_and_ghee.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
