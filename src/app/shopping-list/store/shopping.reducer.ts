import { createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from './shopping.actions';

export interface State {
  Ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIndex: number;
}

const INITIAL_STATE: State = {
  Ingredients: [new Ingredient('apple', 1), new Ingredient('mango', 2)],
  editedIngredient: null,
  editedIndex: -1,
};

export const shoppingListReducer = createReducer(
  INITIAL_STATE,
  on(ShoppingListActions.ADD_INGREDIENT, (state, action) => {
    // note we always destructure all because we sometimes change only some property
    return { ...state, Ingredients: [...state.Ingredients, action.payload] };
  }),
  on(ShoppingListActions.ADD_INGREDIENTS, (state, action) => {
    return { ...state, Ingredients: [...state.Ingredients, ...action.payload] };
  }),
  on(ShoppingListActions.UPDATE_INGREDIENT, (state, action) => {
    const oldIngredient = state.Ingredients[state.editedIndex];
    const newIngredient = { ...oldIngredient, ...action.payload };
    const newIngredients = [...state.Ingredients];
    newIngredients[state.editedIndex] = newIngredient;
    return {
      ...state,
      Ingredients: newIngredients,
      editedIngredient: null,
      editedIndex: -1,
    };
  }),
  on(ShoppingListActions.DELETE_INGREDIENT, (state, action) => {
    return {
      ...state,
      Ingredients: state.Ingredients.filter((el, i) => {
        if (i !== state.editedIndex) {
          return true;
        }
        return false;
      }),
      editedIngredient: null,
      editedIndex: -1,
    };
  }),
  on(ShoppingListActions.START_EDIT, (state, action) => {
    return {
      ...state,
      // returning new reference
      editedIngredient: { ...state.Ingredients[action.payload] },
      editedIndex: action.payload,
    };
  }),
  on(ShoppingListActions.STOP_EDIT, (state) => {
    return { ...state, editedIngredient: null, editedIndex: -1 };
  })
);
