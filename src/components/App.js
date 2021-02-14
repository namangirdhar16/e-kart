import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import ShopPage from '../pages/ShopPage/ShopPage'
import HomePage from '../pages/HomePage/HomePage'
import '../App.css';
import Header from './Header/Header';
import {auth} from '../firebase/firebase.utils';
import SignInSignUp from '../pages/SignInSignUp/SignInSignUp';


const HatsPage = (props) => {
    console.log(props);
    return <div>
        <h1>Hats Page</h1>
        <button onClick = {()=>props.history.push('/')}>Home</button>
    </div>
}


export default class App extends React.Component{
    
    state = { currentUser: null };
    
    unsubscribeFromAuth = null;
    componentDidMount()
    {  
       this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>
       {
           this.setState({ currentUser: user});
           console.log(user);
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
              <Header currentUser = {this.state.currentUser} />
              <Switch>
                <Route path = "/" exact component = {HomePage} />
                <Route path = "/hats" exact component = {HatsPage} />
                <Route path = "/jackets" exact component = {HatsPage} />
                <Route path = "/shop" exact component = {ShopPage} />
                <Route path = "/signin" exact component = {SignInSignUp} />
              </Switch>
            </Router>
        </div>)
    }
}