import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full' , redirectTo: '/recipes' },
	{ path: 'recipes', component: RecipesComponent },
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: '**', redirectTo: '/recipes'}
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
