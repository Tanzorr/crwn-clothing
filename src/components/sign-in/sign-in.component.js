import React, {Component} from 'react';
import {connect} from "react-redux"
import "./sign-in.style.scss"
import FormInput from "../form-imput/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {googleSignInStart,emailSignInStart} from "../../redux/user/user.actions";


class SignInComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:''
        }

    }

    handleSubmit =async event=>{
        event.preventDefault()
        const {email, password} = this.state
        const {emailSignInStart}=this.props

        emailSignInStart(email,password)
       // this.setState({email:'', password:''})
    }

    hendleChange = event=>{
        const {value, name}= event.target

        this.setState({[name]:value})
    }
    render() {
        const {googleSignInStart} = this.props
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
                               <CustomButton onClick={googleSignInStart} isCoogleSignIn>
                                   {''}
                                   Sign in with Google{''}
                               </CustomButton>
                           </div>


                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=> dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email, password}))

})

export default connect(null, mapDispatchToProps)( SignInComponent);