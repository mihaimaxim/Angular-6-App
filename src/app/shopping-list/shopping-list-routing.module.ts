import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

const shoppingRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(shoppingRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class ShoppingListRoutingModule {}