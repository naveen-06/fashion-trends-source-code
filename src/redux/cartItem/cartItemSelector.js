import { createSelector } from 'reselect';

const wishList = state => state.wishList;

export const selectCartItem = createSelector(
  [wishList],
  wishList => wishList.cartItem
);

export const selectTotalPrice = createSelector(
  [selectCartItem],
  cartItem => cartItem.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0)
);