import React from 'react';
import './CheckOutItem.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { removeItem } from '../../redux/actions/cart';
import { decreaseQuantity , increaseQuantity } from '../../redux/actions/cart';
import { decreaseQuantityUtil } from '../../redux/reducers/utils/decrease-quantity';



const CheckOutItem = ({ cartItem , removeItem , decreaseQuantity , increaseQuantity}) => {
    const  { imageUrl , name , quantity, price } = cartItem;
   
    return (
        <div className = "checkout-item"> 
        <div className = "image-container">
            <img  src = {imageUrl} alt = "item" />

        </div>
        <span className = "name">{name}</span>
        <span className = "quantity"><div className = "arrow" onClick = {() => decreaseQuantity(cartItem)}>&#10094;</div>
        <span className = "value" >{quantity}</span><div className = "arrow" onClick = {() => increaseQuantity(cartItem)}>&#10095;</div></span>
        <span className = "price">{price}</span>
        <div className = "remove-button"  onClick = {() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
}



export default connect(null , { removeItem , decreaseQuantity , increaseQuantity })(CheckOutItem);