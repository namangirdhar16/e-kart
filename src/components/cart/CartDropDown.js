import React from 'react';
import './CartDropDown.scss' ;
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem'
import { selectCartItems, selectCartItemsCount } from '../../redux/selectors/cartSelector';

const CartDropDown = (props) => {
     const { items } = props;
    // console.log(items);
    console.log(props);
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">
            {items.map((item) => {
                return <CartItem key = {item.id} item = {item} />
            })}
            </div>
            
            
            <CustomButton>Go to CheckOut </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        items: selectCartItems(state)
    }
}
export default connect(mapStateToProps )(CartDropDown);