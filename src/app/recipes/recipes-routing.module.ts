import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../authentication/auth-guard.service";

const recipesRoutes: Routes = [
	{
		path: 'recipes', component: RecipesComponent, children: [
			{ path: '', component: RecipeStartComponent },
			{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
			{ path: ':id', component: RecipeDetailComponent },
			{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
		]
	}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(recipesRoutes)
    ],
	exports: [RouterModule],
	providers: [AuthGuard],
    declarations: []
})
export class RecipesRoutingModule {}