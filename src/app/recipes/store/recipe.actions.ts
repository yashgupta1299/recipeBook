import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = createAction(
  '[recipe] Set Recipe ',
  props<{
    payload: Recipe[];
  }>()
);
export const FETCH_RECIPES = createAction('[recipe] Fetch Recipe');
export const ADD_RECIPE = createAction(
  '[recipe] Add Recipe',
  props<{ payload: Recipe }>()
);
export const UPDATE_RECIPE = createAction(
  '[recipe] Update Recipe',
  props<{ payload: { index: number; newRecipe: Recipe } }>()
);
export const DELETE_RECIPE = createAction(
  '[recipe] Delete Recipe',
  props<{ payload: number }>()
);
export const STORE_RECIPES = createAction('[recipe] Store Recipe');
