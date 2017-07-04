import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
