import { createSelector } from 'reselect';
import cartReducer from '../reducers/cartReducer';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],

  cartItems =>
    cartItems.reduce(
      (accumalator, cartItem) =>
        accumalator + cartItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce(
    (accumalator, cartItem) =>
      accumalator + cartItem.quantity * cartItem.price,
    0
  )
)