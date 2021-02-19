import { act } from "react-dom/test-utils";

const INITIAL_STATE = {
    hidden: false
}

export default (state = INITIAL_STATE , action) => {
    
   switch(action.type)
   {
       case 'TOGGLE_CART_ICON':
           return {
               ...state , 
               hidden: !state.hidden,
           }
       default:
           return state;

   }
}