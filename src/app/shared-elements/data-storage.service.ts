import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
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

        return this.httpClient.put('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            params: new HttpParams().set('auth', token)
        })
    }

    fetchData() {
        const token = this.authService.getToken();

        this.httpClient.get('https://maxim-s-ng-recipe-book.firebaseio.com/recipes.json',
            {
                params: new HttpParams().set('auth', token)
            }).pipe(
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