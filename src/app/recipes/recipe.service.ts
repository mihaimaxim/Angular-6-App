import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('test recipe', 'this is simply a test', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
        new Recipe('another test recipe', 'this is simply a test', 
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}