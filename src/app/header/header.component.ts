import { Component, OnInit, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipesActions from '../recipes/store/recipe.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  onSaveData() {
    this.store.dispatch(RecipesActions.STORE_RECIPES());
  }

  onFetchData() {
    this.store.dispatch(RecipesActions.FETCH_RECIPES());
  }

  onLogout() {
    this.store.dispatch(AuthActions.LOGOUT());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
