import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipe from '../recipes/store/recipe.reducer';
export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipe: fromRecipe.State;
}

export const AppReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipe: fromRecipe.recipeReducer,
};
