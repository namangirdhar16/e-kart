import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage'
const HatsPage = (props) => {
    console.log(props);
    return <div>
        <h1>Hats Page</h1>
        <button onClick = {()=>props.history.push('/')}>Home</button>
    </div>
}
export default class App extends React.Component{
    
    constructor(props)
    {
        super(props);
    }
    render()
    {   console.log(this.props);
        return (<div>
            <Router>
              <Switch>
                <Route path = "/" exact component = {HomePage} />
                <Route path = "/hats" exact component = {HatsPage} />
                <Route path = "/jackets" exact component = {HatsPage} />
              </Switch>
            </Router>
        </div>)
    }
}