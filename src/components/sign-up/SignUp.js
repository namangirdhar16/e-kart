import React from 'react';
import { auth , createUserProfileDocument } from '../../firebase/firebase.utils.js';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

class SignUp extends React.Component{

    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async (event) => {
    event.preventDefault();
    
    const { password , displayName , email , confirmPassword } = this.state;

    if(password !== confirmPassword)
    {
        alert("passwords don't match");
        return;
    }
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user , { displayName });
      this.setState({
          email: '',
          displayName: '',
          password: '',
          confirmPassword: '',
      })
      

    }
    catch(err)
    {
      console.log(err);
    }
    }

    handleChange = (event) => {
        const { name , value } = event.target;
        this.setState({
            [name]: value
        })
    }
    render()
    { 
        const { displayName , email , password , confirmPassword } = this.state; 
       return (
        <div className = "sign-up">
            <h2 className = "title">I don't  have an account</h2>
            <span>Sign Up with your email and password</span>
            <form className = "sign-up-form" onSubmit = {this.handleSubmit}>
              <FormInput 
               name = "displayName"
               value = {displayName}
               onChange = {this.handleChange}
               type = "text"
               label = "Display Name"
               />
               <FormInput
               name = "email"
               value = {email}
               onChange = {this.handleChange}
               type = "email"
               label = "Email"
               />
               <FormInput
               name = "password"
               value = {password}
               onChange = {this.handleChange}
               type = "password"
               label = "Password"
               />
               <FormInput
               name = "confirmPassword"
               value = {confirmPassword}
               onChange = {this.handleChange}
               type = "password"
               label = "confirm Password"
               />
               <CustomButton type = "submit"> SIGN UP </CustomButton>
            </form>
            
        </div>
       )
    }
}
export default SignUp;