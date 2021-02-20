import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils.js';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart/CartDropDown';
import { toggleCartIcon } from '../../redux/actions/cart';



const Header = (props) => {
    const { currentUser , hidden: {hidden}} = props;
   // console.log(currentUser.currentUser, 'currentUser');
    return (
    
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT 
        </Link>
        <Link to = "/signin" className = "option" >
          SIGN IN
        </Link>
        <div className = "option" onClick = {() => auth.signOut()}>
          SIGN OUT
        </div>
        
        <CartIcon />
      </div>
      {
        hidden ? 
        <CartDropDown />
        :
        null
      }
    </div>
  );
        }
  const mapStateToProps = state => {
    console.log(state);
    return {

       currentUser: state.user.currentUser,
       hidden : state.cart
  }
};
  
  
  export default connect(mapStateToProps , { toggleCartIcon })(Header);

