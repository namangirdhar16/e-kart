import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import './CartIcon.scss';
import {  toggleCartIcon } from '../../redux/actions/cart';
import { connect } from 'react-redux';



const CartIcon = (props) => {
    return (
        <div className = "cart-icon">
          <ShoppingIcon className = "shopping-icon" onClick = {props.toggleCartIcon}/>
              <span className = "item-count">
                  {props.cartItemsCount}
              </span>
         
        </div>
    )
}
const mapStateToProps = (state) => {
   console.log(state);

   return {
      cartItemsCount: state.cart.cartItems.length
   }
}
export default connect(mapStateToProps , { toggleCartIcon })(CartIcon);