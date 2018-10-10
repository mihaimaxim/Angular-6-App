import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from '../../authentication/auth.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	id: number;

	constructor(
		private recipeService: RecipeService,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.recipe = this.recipeService.getRecipe(this.id)
			}
		)
	}

	onAddIngredientsToShoppingList() {
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
	}

	onEdit() {
		this.router.navigate(['edit'], { relativeTo: this.route })
	}

	onDelete() {
		if (this.authService.isAuthenticated()) {
			this.recipeService.deleteRecipe(this.id);
			this.router.navigate(['/recipes'])
		} else {
			return alert('You should authenticate first!')
		}
	}
}
