import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../authentication/auth.service";
import { Recipe } from "../recipes/recipe-list/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeData() {
const token = this.authService.getToken();

        return this.httpClient.put('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
    }

    fetchData() {
        const token = this.authService.getToken();

        this.httpClient.get('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token).pipe(
        map(
            (recipes: Recipe[]) => {
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe)
                        recipe['ingredients'] = []
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        )
    }
}