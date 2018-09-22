import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared-elements/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRefference: ElementRef;
	@ViewChild('amountInput') amountInputRefference: ElementRef;

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit() {
	}

	onAddItem() {
		const ingredientName = this.nameInputRefference.nativeElement.value;
		const ingredientAmount = this.amountInputRefference.nativeElement.value;
		const newIngredient = new Ingredient(ingredientName, ingredientAmount);
		this.shoppingListService.addIngredient(newIngredient)
	}
}
