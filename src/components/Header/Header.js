import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils.js';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropDown from '../cart/CartDropDown';
import { toggleCartIcon } from '../../redux/actions/cart';
import { selectCurrentUser } from '../../redux/selectors/userSelector';
import { selectCartHidden } from '../../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';



const Header = (props) => {
    console.log(props);
  
   const {  hidden } = props;
  //  console.log(currentUser);
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
        {
         1 ? 
          (
            <div className = "option" onClick = {() => auth.signOut()}>
              SIGN OUT
            </div>)
            :null}
            {1?
            (<Link to = "/signin" className = "option" >
             SIGN IN
           </Link>):null
        }
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
  const mapStateToProps = createStructuredSelector  (
   
     {

       currentUser: selectCurrentUser,
       hidden : selectCartHidden
  }
  );
  
  
  export default connect(mapStateToProps , { toggleCartIcon })(Header);

