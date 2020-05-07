import React, {useState} from 'react';
import {connect} from 'react-redux'
import FormInput from "../form-imput/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signUpStart} from "../../redux/user/user.actions";
import "./sign-up.styles.scss"

const SignUpComponent=({signUpStart})=> {
    const[userData, setUserData]= useState({
        displeyName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const {displayName, email, password,confirmPassword}= userData
    
  const  handleSubmit = async event=>{
        event.preventDefault();
        if(password!== confirmPassword){
            alert("Password don't match")
            return 
        }
        signUpStart({displayName,email,password})
    }

   const handleChange = event=>{
        const {name, value}=event.target
       setUserData({...userData,[name]:value})
    }
    return (
            <div className='sign-in'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your eamil and password</span>
                <form onSubmit={handleSubmit} className="sign-up">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName || ""}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm password'
                        required
                   />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );

}

const mapDispatchToProps =dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUpComponent);