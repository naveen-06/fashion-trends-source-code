import * as actionType from './cartItemActionType';

export const addCartItem = (cartItem, userId) => ({
  type: actionType.ADD_CART_ITEM,
  payload: cartItem,
  user: userId
});

export const removeCartItem = (cartItem, userId) => ({
  type: actionType.REMOVE_CART_ITEM,
  payload: cartItem,
  user: userId
});

export const removeProduct = (id, userId) => ({
  type: actionType.DELETE_PRODUCT,
  payload: id,
  user: userId
});

export const clearCartItems = userId => ({
  type: actionType.CLEAR_CART_ITEM,
  user: userId
});

export const cartItemLocalStorage = userId => ({
  type: actionType.CART_ITEM_lOCAL_STORAGE,
  user: userId
});