import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared-elements/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'quattro formaggi',
            'the best',
            'http://www.meteoweb.eu/wp-content/uploads/2014/08/pizza-formaggi.jpg',
            [
                new Ingredient('cheese', 1),
                new Ingredient('peperoncino', 1)
            ]
        ),
        new Recipe(
            'burger with fries',
            'also good',
            'https://static.olocdn.net/menu/applebees/db21d0fba2f611d95ba3d79bda75178c.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('fries', 20)
            ]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}