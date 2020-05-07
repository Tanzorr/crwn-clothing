import React,{useEffect} from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {selectCurrentUser} from "./redux/user/user.selector.";
import {connect} from "react-redux";
import {checkUserSession} from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";


const App =({checkUserSession,currentUser})=>{

    const  unsubscribeFromAuth = null

      useEffect(()=>{
          checkUserSession()
      },[checkUserSession])


    return (
            <div>
                <Header/>
                <div>
                    <Route exact  path={`/`} component={HomePage}/>
                    <Route  path={`/shop`} component={ShopPage}/>
                    <Route exact path={`/checkout`} component={CheckoutPage}/>
                    <Route exact path='/signin'
                            render={()=>
                                currentUser?(
                                    <Redirect to='/'/>
                                ):(
                                   <SignInAndSignUpPage/>
                                )
                            }
                    />
                </div>
            </div>
        );



}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch=>({
    checkUserSession:()=>dispatch(checkUserSession())
})




export default   connect(mapStateToProps, mapDispatchToProps)(App);
