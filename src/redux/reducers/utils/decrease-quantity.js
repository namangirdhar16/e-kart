import { decreaseQuantity } from "../../actions/cart";

export const decreaseQuantityUtil = (cartItems,cartItem) => {

     return cartItems.map((item) => {
         const newQuantity = item.quantity > 0 ? item.quantity - 1 : 0;
         return item.id === cartItem.id ? { ...item , quantity: newQuantity } : item ;  
     })
}