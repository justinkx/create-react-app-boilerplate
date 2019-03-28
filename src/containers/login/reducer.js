import * as authTypes from '../../types/authTypes';

const initialState = {
  loading: false,
  isLoggedIn: false,
  auth: {}
};

export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case authTypes.LOGIN:
      return { ...state, fetching: true };
    case authTypes.LOGIN_SUCCESS:
      return { ...state, fetching: false, isLoggedIn: true, auth: action.auth };
    default:
      return state;
  }
}
