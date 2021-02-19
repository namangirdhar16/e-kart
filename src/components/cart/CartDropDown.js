import React from 'react';
import './CartDropDown.scss' ;
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux'

const CartDropDown = (props) => {
    const { items } = props;
    return (
        <div className = "cart-dropdown">
            {/* <div className = "cart-items" >
                { items.forEach((item) => {
                    return <DropDownItem key = {item.id} {...item} />
                })}
            </div> */}
            <CustomButton>Go to CheckOut </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.cartItems
    }
}
export default connect(mapStateToProps )(CartDropDown);