import React from 'react';
import './CheckOutPage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/selectors/cartSelector';
import CheckOutItem from '../../components/checkout-item/CheckOutItem';
import { removeItem } from '../../redux/actions/cart';
import StripeCheckoutButton from '../../components/stripe- button/stripeButton';

const CheckOutPage = ({ cartItemsTotal , cartItems}) => {
    
    //console.log(props);
   // console.log(props.cartItems)
    return (
        <div className = "checkout-page">
            <div className = "checkout-header">
                <div className = "header-block">
                Product
                </div>
                <div className = "header-block">
                Description
                </div>
                <div className = "header-block">
                Quantity
                </div> 
                <div className = "header-block">
                Price
                </div>
                <div className = "header-block">
                Remove
                </div>
                
            </div>
            { cartItems.map((cartItem) => <CheckOutItem  id = {cartItem.id} cartItem = {cartItem} />)}
                <div className = "total">
                    Total: ${cartItemsTotal}
                </div>
                <StripeCheckoutButton price = {cartItemsTotal} />
            Checkout page
        </div>
    )
}
const mapStateToProps = createStructuredSelector(
   { cartItems: selectCartItems ,
     cartItemsTotal: selectCartItemsTotal
   }
)


export default connect(mapStateToProps ,{ })(CheckOutPage);
