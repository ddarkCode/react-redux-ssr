import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { authReducer } from './authReducer';

export const reducers = combineReducers({
  users: userReducer,
  auth: authReducer,
});
