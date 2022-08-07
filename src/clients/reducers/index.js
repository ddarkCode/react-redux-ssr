import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { authReducer } from './authReducer';
import { adminsReducer } from './adminsReducer';

export const reducers = combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer,
});
