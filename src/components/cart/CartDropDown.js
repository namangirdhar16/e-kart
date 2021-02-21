import React from 'react';
import './CartDropDown.scss' ;
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem'
import { selectCartItems, selectCartItemsCount } from '../../redux/selectors/cartSelector';
import { withRouter } from 'react-router-dom';
import {  toggleCartIcon } from '../../redux/actions/cart';


const CartDropDown = (props) => {
     const { items } = props;
     const { history } = props;
    // console.log(items);
    console.log(props);
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">
            
            { items.length ? 
             (items.map((item) => {
                return <CartItem key = {item.id} item = {item} />
            })) :
            <span className = "empty-message" >Your cart is empty</span>
            }
            </div>
            
            
            <CustomButton onClick = {() => {history.push('/checkout'); toggleCartIcon(); } }>Go to CheckOut </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        items: selectCartItems(state)
    }
}
export default withRouter(connect(mapStateToProps )(CartDropDown));