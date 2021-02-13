import React from 'react';

import './SignIn.scss';


class SignIn extends React.Component{

    state = {
        email: '',
        password: ''
    }
    onHandleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }
    onHandleChange = (event) => {
       const { value , name } = event.target;
       this.setState({
           [name]: value,

       })
       
    }
    render()
    {
       return (
           <div className = "sign-in">
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
               <form onSubmit = {(e) => this.onHandleSubmit(e)}>
                   <input name = "email" type = "email" value = {this.state.email}  required/>
                   <label>Email</label>
                   <input onChange = {(e)=> this.onHandleChange(e)} name = "email" type = "email" value = {this.state.email} />
                   <label>Password</label>
                   <input onChange = {(e)=> this.onHandleChange(e)} name = "password" type = "password" value = {this.state.password} />
                   <label>Submit</label>
                   <input type = "submit" value = "Submit Form" />
                   
               </form>
           </div>
       )
    }
}

export default SignIn;