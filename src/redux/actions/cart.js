export const toggleCartIcon = () => {
    return {
        type: 'TOGGLE_CART_ICON',
    }
}

export const removeItem = (item) => {
 return {
     type: 'REMOVE_ITEM',
     payload: item
 }
}
export const decreaseQuantity = (item) => {
    return {
       
        type: 'DECREASE_QUANTITY',
        payload: item
    }
}
export const increaseQuantity = (item) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: item
    }
}
export const addItem = (item) => {
    return {
        type : 'ADD_ITEM',
        payload: item
    }
}