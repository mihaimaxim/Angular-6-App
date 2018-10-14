import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';



const routes: Routes = [
	// { path: '', pathMatch: 'full', redirectTo: '/recipes' },
	{ path: '', component: HomeComponent },
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
	{ path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' },
	{ path: 'signin', loadChildren: './authentication/authentication.module#AuthenticationModule' },
	{ path: 'signup', loadChildren: './authentication/authentication.module#AuthenticationModule' },
	{ path: '**', redirectTo: '' }
]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [RouterModule],
	declarations: []
})
export class AppRoutingModule { }