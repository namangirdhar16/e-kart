import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils.js';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';


const Header = ({ currentUser }) => {
    console.log(currentUser);
    return (
        <div className = "header">
            <Link to = "/"  className = "logo-container">
                <Logo className = "logo" />
            </Link>
            <div className = "options">
                <Link to = "/shop" className = "option">
                    SHOP
                </Link>
                <Link to = "/contact" className = "option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div onClick = {() => auth.signOut()} className = "option">
                        SIGN IN
                    </div>:
                     <Link to = "/signin" className = "option">
                     SIGN OUT
                    </Link>
                    
                   
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);