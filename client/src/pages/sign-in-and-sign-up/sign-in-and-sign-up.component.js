import React from "react";

import "./sign-in-and-sign-up.style.scss"
import SignInComponent from "../../components/sign-in/sign-in.component";
import SignUpComponent from "../../components/sign-up/sign-up.component";




const SignInAndSignUpPage =()=>(
    <div className='sign-in-and-sign-up'>
        <SignUpComponent/>
        <SignInComponent/>
    </div>
)

export  default SignInAndSignUpPage
