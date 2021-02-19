

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
               cartItems: [
                   ...state.cartItems ,action.payload
               ]
           }
       default:
           return state;

   }
}