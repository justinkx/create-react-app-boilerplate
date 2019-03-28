import * as authTypes from '../../types/authTypes';
import * as authActions from './actions';

import { takeLatest, call, put, all } from "redux-saga/effects";

export const loginUser = (auth) => {
  return { hello: 'true' };
};
export function* watcherSaga() {
  yield all([
    takeLatest(authTypes.LOGIN, login),
  ]);
}



function* login(data) {
  try {
    const auth = yield call(loginUser, data.auth);
    yield put(authActions.loginSuccess(auth));
  } catch (error) {

  }
}