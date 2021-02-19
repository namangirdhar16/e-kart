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
    const { currentUser } = props;
    console.log(props);
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
        { currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : null}
        
        {
          !currentUser ? (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          ): null
        }
        {/* <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div> */}
        <CartIcon />
      </div>
      {
        props.hidden.hidden ? 
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
       hidden : state.hidden
  }
};
  
  
  export default connect(mapStateToProps , { toggleCartIcon })(Header);

