import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  exhaustMap,
  catchError,
  tap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as RecipesActions from './recipe.actions';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import * as fromApp from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
@Injectable()
export class RecipeEffects {
  fetchRecipes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://recipebook-1d9dc-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
        );
      }),
      map((recipes) => {
        if (!recipes) {
          return [];
        }
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return RecipesActions.SET_RECIPES({ payload: recipes });
      })
    )
  );

  storeRecipes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipe')),
        switchMap(([recipeAction, recipeState]) => {
          return this.http.put(
            'https://recipebook-1d9dc-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
            recipeState.recipes
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private route: Router,
    private store: Store<fromApp.AppState>
  ) {}
}
