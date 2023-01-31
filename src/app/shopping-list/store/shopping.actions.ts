import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = createAction(
  '[Shopping List] Add Ingredient',
  props<{ payload: Ingredient }>()
);

export const ADD_INGREDIENTS = createAction(
  '[Shopping List] Add Ingredients',
  props<{ payload: Ingredient[] }>()
);

export const UPDATE_INGREDIENT = createAction(
  '[Shopping List] Update Ingredient',
  props<{ payload: Ingredient }>()
);

export const DELETE_INGREDIENT = createAction(
  '[Shopping List] Delete Ingredient'
);

export const START_EDIT = createAction(
  '[Shopping List] Start Edit',
  props<{ payload: number }>()
);

export const STOP_EDIT = createAction('[Shopping List] Stop Edit');

// const t = myDeepCopy(state);
// const t = { ...state };
// const t = [...state.Ingredients];
// t[0] = new Ingredient('cheese', 4);
// console.log('old', state.Ingredients);
// console.log('new', t);
// // console.log(t);
// console.log(t === state);
// console.log(t[0] === state[0]);
// console.log();
// console.log(state.Ingredients === t.Ingredients);
// const arr1 = [{ a: 1 }];
// const arr2 = myDeepCopy(arr1);
// console.log(arr1 === arr2); // false
// console.log(arr1[0]); // true
// console.log(arr2[0]); // true
// console.log(arr1[0] === arr2[0]); // true

// const myDeepCopy = (obj: any) => {
//     if (typeof obj !== 'object' || obj === null) {
//       return obj;
//     }

//     if (obj instanceof Date) {
//       return new Date(obj.getTime());
//     }

//     if (obj instanceof Array) {
//       return obj.reduce((arr, item, i) => {
//         arr[i] = myDeepCopy(item);
//         return arr;
//       }, []);
//     }

//     if (obj instanceof Object) {
//       return Object.keys(obj).reduce((newObj, key) => {
//         newObj[key] = myDeepCopy(obj[key]);
//         return newObj;
//       }, {});
//     }
//   };
