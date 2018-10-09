import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Recipe } from "./recipe-list/recipe.model";
import { Ingredient } from "../shared-elements/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }

    getRecipe(index: number) {
        return this.recipes[index]
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
    }
}