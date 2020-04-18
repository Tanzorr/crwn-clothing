import React, {Component} from 'react';
import "./sign-in.style.scss"
import FormInput from "../form-imput/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithCoogle} from "../../firebase/firebase.utils";


class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }

    }

    handleSubmit = event=>{
        event.preventDefault()

        this.setState({email:'', password:''})
    }

    hendleChange = event=>{
        const {value, name}= event.target

        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                               name="email"
                               value={this.state.email}
                               handleChange={this.hendleChange}
                               label="Email"
                               required/>

                    <FormInput type="password"
                           name="password"
                           value={this.state.password}
                               handleChange={this.hendleChange}
                           label="password"
                           required/>

                           <div className="buttons">
                               <CustomButton type="submit">Sign In</CustomButton>
                               <CustomButton onClick={signInWithCoogle} isCoogleSignIn>
                                   {''}
                                   Sign in with Google{''}
                               </CustomButton>
                           </div>


                </form>
            </div>
        );
    }
}

export default SignInComponent;