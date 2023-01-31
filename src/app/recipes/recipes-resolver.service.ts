import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Recipe } from './recipe.model';
import { Store } from '@ngrx/store';
import * as RecipesActions from './store/recipe.actions';
import * as fromApp from '../store/app.reducer';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap, take, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('recipe').pipe(
      take(1),
      map((recipeState) => recipeState.recipes),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(RecipesActions.FETCH_RECIPES());
          return this.actions$.pipe(
            ofType(RecipesActions.SET_RECIPES),
            take(1),
            map((recipeState) => {
              return recipeState.payload;
            })
          );
        } else {
          return of(recipes);
        }
      })
    );
  }
}
