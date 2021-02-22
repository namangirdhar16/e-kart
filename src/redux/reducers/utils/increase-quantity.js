export const increaseQuantityUtil = (cartItems,cartItem) => {
    
    return cartItems.map((item) => {
        return item.id === cartItem.id ? { ...item , quantity: item.quantity + 1 } : item;
    })
}