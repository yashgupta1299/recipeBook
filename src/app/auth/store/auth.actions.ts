import { createAction, props } from '@ngrx/store';

export const AUTHENTICATE_SUCCESS = createAction(
  '[Auth] Login ',
  props<{
    payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
      redirect: boolean;
    };
  }>()
);

export const LOGOUT = createAction('[Auth] Logout');

export const LOGIN_START = createAction(
  '[Auth] Login Start',
  props<{ payload: { email: string; password: string } }>()
);

export const AUTHENTICATE_FAIL = createAction(
  '[Auth] Login Fail',
  props<{ payload: string }>()
);

export const SIGNUP_START = createAction(
  '[Auth] Signup start',
  props<{ payload: { email: string; password: string } }>()
);

export const CLEAR_ERROR = createAction('[Auth] Clear Error');

export const AUTO_LOGIN = createAction('[Auth] Auto Login');
