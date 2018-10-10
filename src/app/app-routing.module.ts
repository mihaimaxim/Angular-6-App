import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthGuard } from './authentication/auth-guard.service';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/recipes' },
	{
		path: 'recipes', component: RecipesComponent, children: [
			{ path: '', component: RecipeStartComponent },
			{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
			{ path: ':id', component: RecipeDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
		]
	},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent },
	{ path: '**', redirectTo: '/recipes' }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }
