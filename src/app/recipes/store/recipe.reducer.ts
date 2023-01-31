import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const INITIAL_STATE: State = {
  recipes: [],
};

export const recipeReducer = createReducer(
  INITIAL_STATE,
  on(RecipesActions.SET_RECIPES, (state, action) => {
    return { ...state, recipes: [...action.payload] };
  }),
  on(RecipesActions.ADD_RECIPE, (state, action) => {
    return { ...state, recipes: [...state.recipes, action.payload] };
  }),
  on(RecipesActions.UPDATE_RECIPE, (state, action) => {
    const updatedRecipes = [...state.recipes];
    updatedRecipes[action.payload.index] = {
      ...state.recipes[action.payload.index],
      ...action.payload.newRecipe,
    };
    return { ...state, recipes: updatedRecipes };
  }),
  on(RecipesActions.DELETE_RECIPE, (state, action) => {
    return {
      ...state,
      recipes: state.recipes.filter((recipe, index) => {
        return index !== action.payload;
      }),
    };
  })
);
