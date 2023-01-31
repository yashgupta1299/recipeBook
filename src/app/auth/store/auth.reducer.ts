import { createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const INITIAL_STATE: State = {
  user: null,
  authError: null,
  loading: false,
};

export const authReducer = createReducer(
  INITIAL_STATE,
  on(AuthActions.AUTHENTICATE_SUCCESS, (state, action) => {
    const user = new User(
      action.payload.email,
      action.payload.userId,
      action.payload.token,
      action.payload.expirationDate
    );
    return { ...state, user: user, authError: null, loading: false };
  }),
  on(AuthActions.LOGOUT, (state) => {
    return { ...state, user: null };
  }),
  on(AuthActions.LOGIN_START, AuthActions.SIGNUP_START, (state) => {
    return { ...state, authError: null, loading: true };
  }),
  on(AuthActions.AUTHENTICATE_FAIL, (state, action) => {
    return { ...state, user: null, authError: action.payload, loading: false };
  }),
  on(AuthActions.CLEAR_ERROR, (state) => {
    return { ...state, authError: null };
  })
);
