import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl , price , quantity , name}}) => {
   // console.log(item);
    console.log('hello')
    return (
        <div className = "cart-item">
            <img src = {imageUrl} alt = "image" />
            <div className = "item-details">
                <span className = "name">{name}</span>
                <span className = "price">
                    {quantity}X${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;