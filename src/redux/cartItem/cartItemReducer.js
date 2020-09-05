import * as actionType from './cartItemActionType';
import { addItem, removeItem, removeProduct, clearCartItems, getCartItem } from '../../utility/utility';

// const getWishList = () => {
//   return JSON.parse(window.localStorage.getItem('wishlist'));
// };

const INITIAL_STATE = {
  cartItem: [],
  totalPrice: 0
};

const cartItem = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_CART_ITEM:
      return {
        ...state,
        cartItem: addItem(state.cartItem, action.payload, action.user)
      };
    case actionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItem: removeItem(state.cartItem, action.payload, action.user)
      };
    case actionType.DELETE_PRODUCT:
      return {
        ...state,
        cartItem: removeProduct(state.cartItem, action.payload, action.user)
      };
    case actionType.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItem: clearCartItems(action.user)
      }
    case actionType.CART_ITEM_lOCAL_STORAGE:
      return {
        ...state,
        cartItem: getCartItem(action.user)
      }
    default:
      return state;
  }
};

export default cartItem;