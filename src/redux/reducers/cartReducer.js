
import { decreaseQuantity, increaseQuantity } from '../actions/cart';
import { addItemToCart } from './utils/add-item-to-cart';
import { decreaseQuantityUtil } from './utils/decrease-quantity.js';
import { increaseQuantityUtil } from './utils/increase-quantity';
const INITIAL_STATE = {
    hidden: false , 
    cartItems: [],
}

export default (state = INITIAL_STATE , action) => {
    
   switch(action.type)
   {
       case 'TOGGLE_CART_ICON':
           return {
               ...state , 
               hidden: !state.hidden,
           }
       case 'ADD_ITEM':
           return {
               ...state, 
            //    cartItems: [
            //        ...state.cartItems ,action.payload
            //    ]
            cartItems: addItemToCart(state.cartItems , action.payload)
           }
       case 'REMOVE_ITEM':
           return {
               ...state,
               cartItems: state.cartItems.filter((cartItem) => cartItem.id != action.payload.id)
           }

       case 'DECREASE_QUANTITY':
           return {
               ...state,
               cartItems: decreaseQuantityUtil(state.cartItems,action.payload)
           }
       case 'INCREASE_QUANTITY':
           return {
               ...state,
               cartItems: increaseQuantityUtil(state.cartItems,action.payload)
           }
       default:
           return state;

   }
}