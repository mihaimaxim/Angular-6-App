import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../authentication/auth.service";
import { Recipe } from "../recipes/recipe-list/recipe.model";

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService
    ) { }

    storeData() {
const token = this.authService.getToken();

        return this.http.put('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
    }

    fetchData() {
        const token = this.authService.getToken();

        this.http.get('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token).pipe(
        map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
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