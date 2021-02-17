import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import ShopPage from '../pages/ShopPage/ShopPage'
import HomePage from '../pages/HomePage/HomePage'
import '../App.css';
import Header from './Header/Header';
import { auth , createsUserProfileDocument } from '../firebase/firebase.utils';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';
import { connect } from 'react-redux';
import  setCurrentUser from '../redux/actions/user';
import { Redirect } from 'react-router-dom';


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
             const userRef = await createsUserProfileDocument(userAuth);
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
                <Route path = "/shop" exact component = {ShopPage} />
                <Route path = "/signin" exact render = {() => this.props.currentUser ? (<Redirect to = "/signin" />) : <SignInSignUp />} />
              </Switch>
            </Router>
            
        </div>)
    }
}

const mapStateToProps = ({user}) => {
    return {
        currentUser: user.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
   return { setCurrentUser: user => dispatch(setCurrentUser(user)) };

}
export default connect(mapStateToProps, mapDispatchToProps)(App);