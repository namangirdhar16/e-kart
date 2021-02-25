import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import ShopPage from '../pages/ShopPage/ShopPage'
import HomePage from '../pages/HomePage/HomePage'
import '../App.css';
import Header from './Header/Header';
import { auth , createUserProfileDocument } from '../firebase/firebase.utils';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';
import { connect } from 'react-redux';
import  setCurrentUser from '../redux/actions/user';
import { Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import CheckOutPage from '../pages/checkoutPage/CheckOutPage';



const HatsPage = (props) => {
    console.log(props);
    return <div>
        <h1>Hats Page</h1>
        <button onClick = {()=>props.history.push('/')}>Home</button>
    </div>
}

class App extends React.Component{
    
    
    unsubscribeFromAuth = null;
    componentDidMount()
    {  
       this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=>
       {
           if(userAuth)
           {
             const userRef = await createUserProfileDocument(userAuth);
             userRef.onSnapshot((snapshot) => {
                 
                   this.props.setCurrentUser( {
                         id: snapshot.id,
                         ...snapshot.data()
                     })
                 
                 
             })
             
           }
           this.props.setCurrentUser({ currentUser: userAuth});
       });


    }
    componentWillUnmount()
    {
        this.unsubscribeFromAuth();
    }
    render()
    {  
        
        console.log(this.props);
        return (<div>
            <Router>
              <Header  />
              <Switch>
                <Route path = "/" exact component = {HomePage} />
                <Route path = "/hats" exact component = {HatsPage} />
                <Route path = "/jackets" exact component = {HatsPage} />
                <Route path = "/shop"  component = {ShopPage} />
                <Route path = "/signin" exact component = {SignInSignUp} />
                 {/* render = {() => this.props.currentUser === null ? <SignInSignUp /> : (<Redirect to = "/" />) } /> */}
                <Route path = "/checkout" exact component = {CheckOutPage} />
                  
              </Switch>
            </Router>
            
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state)
    }
}
// analogous to passing action creater as props or using mapDispatch to Props
const mapDispatchToProps = (dispatch) => {
   return { setCurrentUser: user => dispatch(setCurrentUser(user)) };

}
export default connect(mapStateToProps, { setCurrentUser })(App);