import React from 'react';

import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{

    state = {
        email: '',
        password: ''
    }
    onHandleSubmit = async (event) => {
        event.preventDefault();
        const { email , password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email: '',
                password: ''
            });
        }
        catch(err)
        {
            console.log(err);
        }

        
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
                   {/* {/* <FormInput name = "email" type = "email" value = {this.state.email} label = "email"    required/> */}
                   {/* <label>Email</label>  */}
                   <FormInput handleChange = {(e)=> this.onHandleChange(e)} name = "email" type = "email" label = "email"  required value = {this.state.email} />
                   {/* <label>Password</label> */}
                   <FormInput handleChange = {(e)=> this.onHandleChange(e)} name = "password" type = "password" label = "password" required value = {this.state.password} />
                   {/* <label>Submit</label> */}
                 <div className = "buttons">
                  <CustomButton type = "submit">
                       Sign In 
                   </CustomButton>
                   <CustomButton  type = "submit" isGoogleSignIn = "true" onClick = {SignInWithGoogle}>
                      Google Sign In
                   </CustomButton>
                 </div>
                   
                   
               </form>
           </div>
       )
    }
}

export default SignIn;