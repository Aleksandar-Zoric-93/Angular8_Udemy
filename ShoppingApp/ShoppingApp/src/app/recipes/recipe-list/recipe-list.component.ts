import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe name here', 'Recipe Description', 'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('Recipe name here 2', 'Recipe Description 2', 'https://i.pinimg.com/originals/1a/f4/67/1af467d05e95579ea4f46734182ef13f.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
