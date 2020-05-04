import React, {useState} from 'react';
import {connect} from "react-redux"
import "./sign-in.style.scss"
import FormInput from "../form-imput/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.actions";


const SignInComponent =({emailSignInStart,googleSignInStart})=> {
    const [userCredentials, sertCredentials] = useState({email:"",password:""})

    const {email, password} = userCredentials
  const  handleSubmit =async event=>{
        event.preventDefault()
        emailSignInStart(email,password)

    }

  const  hendleChange = event=>{
        const {value, name}= event.target

        sertCredentials({...userCredentials,[name]:value})
    }

    return (
            <div className="sign-in">
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput type="email"
                               name="email"
                               value={email}
                               handleChange={hendleChange}
                               label="Email"
                               required/>

                    <FormInput type="password"
                           name="password"
                           value={password}
                               handleChange={hendleChange}
                           label="password"
                           required/>

                           <div className="buttons">
                               <CustomButton type="submit">Sign In</CustomButton>
                               <CustomButton onClick={googleSignInStart} isCoogleSignIn>
                                   {''}
                                   Sign in with Google{''}
                               </CustomButton>
                           </div>


                </form>
            </div>
        );

}

const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=> dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email, password}))

})

export default connect(null, mapDispatchToProps)( SignInComponent);