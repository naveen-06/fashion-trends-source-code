const syncLocalStorage = (wishlist, userId) => {
  window.localStorage.setItem(userId, JSON.stringify(wishlist));
};

export const getCartItem = userId => {
  const cartItem = JSON.parse(window.localStorage.getItem(userId));
  if (cartItem) {
    return cartItem;
  }

  return [];
};

export const addItem = (cartItem, itemToAdd, userId) => {
  const hasItem = cartItem.find(item => item.id === itemToAdd.id);

  let listItem;
  if (hasItem) {
    listItem = cartItem.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item );
    syncLocalStorage(listItem, userId);
    return listItem;
  }

  listItem = cartItem.concat({ ...itemToAdd, quantity: 1 });
  syncLocalStorage(listItem, userId);
  return listItem;
};

export const removeItem = (cartItem, itemToRemove, userId) => {
  const hasItem = cartItem.find(item => item.id === itemToRemove.id);

  let listItem;
  if (hasItem.quantity === 1) {
    listItem = cartItem.filter(item => item.id !== itemToRemove.id);
    syncLocalStorage(listItem, userId);
    return listItem;
  }

  if (hasItem.quantity > 1) {
    listItem = cartItem.map(item => item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item );
    syncLocalStorage(listItem, userId);
    return listItem;
  }
};

export const removeProduct = (cartItem, itemId, userId) => {
  const wishlist = cartItem.filter(item => item.id !== itemId);
  syncLocalStorage(wishlist, userId);
  return wishlist;
};

export const clearCartItems = userId => {
  const wishlist = [];
  syncLocalStorage(wishlist, userId);
  return wishlist;
};

export const randomRating = () => {
  const rating = ['3.7', '4.0', '4.5', '4.8'];
  return rating[Math.floor(Math.random() * rating.length)];
};