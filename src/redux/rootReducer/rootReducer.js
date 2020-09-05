import { combineReducers } from 'redux';

import cartItemReducer from '../cartItem/cartItemReducer';
import currentUserReducer from '../currentUser/currentUserReducer';

export const rootReducer = combineReducers({
  wishList: cartItemReducer,
  user: currentUserReducer
});