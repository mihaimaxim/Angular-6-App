import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    FormsModule
  ],
  declarations: [   
    ShoppingListComponent,
    ShoppingEditComponent,
  ]
})
export class ShoppingListModule { }
