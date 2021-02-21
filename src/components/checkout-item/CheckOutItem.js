import React from 'react';
import './CheckOutItem.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



const CheckOutItem = ({ cartItem : { imageUrl , name , quantity, price }}) => {
    return (
        <div className = "checkout-item"> 
        <div className = "image-container">
            <img  src = {imageUrl} alt = "item" />

        </div>
        <span className = "name">{name}</span>
        <span className = "quantity">{quantity}</span>
        <span className = "price">{price}</span>
        <div className = "remove-button" >&#10005;</div>
        </div>
    )
}



export default CheckOutItem;