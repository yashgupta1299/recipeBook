import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../../recipes/store/recipe.actions';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select('recipe')
      .pipe(map((recipeState) => recipeState.recipes))
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    // this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
