import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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