import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RecipesModule,
    ShoppingListModule,
    AuthenticationModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }