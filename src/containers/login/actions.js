import * as authTypes from '../../types/authTypes';

export const login = (auth) =>({
  type: authTypes.LOGIN,
  auth
});

export const loginSuccess = (auth) =>({
  type: authTypes.LOGIN_SUCCESS,
  auth
});