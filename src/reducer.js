import { combineReducers } from 'redux';
import { AuthReducer } from './containers/login/reducer';
import { growlReducer } from './components/growl/reducer';

export const finalReducer = combineReducers({
  auth: AuthReducer,
  growl: growlReducer
});
