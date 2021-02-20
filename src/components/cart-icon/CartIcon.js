import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import { selectCartItems, selectCartItemsCount } from '../../redux/selectors/cartSelector';

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
   console.log('mapstate from cartIcon is called!');

   return {
      cartItemsCount: selectCartItemsCount(state)
   }
}
export default connect(mapStateToProps , { toggleCartIcon })(CartIcon);