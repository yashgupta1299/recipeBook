import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from './store/shopping.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ Ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(
    // key should br registered one and its balue should be the type of output of reducer
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();

    // old method
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    // (ingredients: Ingredient[]) => {
    // this.ingredients = ingredients;
    // }
    // );
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(ShoppingListActions.START_EDIT({ payload: index }));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
