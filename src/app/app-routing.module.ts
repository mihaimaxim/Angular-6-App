import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/recipes' },
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
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
