export const toggleCartIcon = () => {
    return {
        type: 'TOGGLE_CART_ICON',
    }
}

export const addItem = (item) => {
    return {
        type : 'ADD_ITEM',
        payload: item
    }
}