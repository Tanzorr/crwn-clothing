import React,{useEffect, lazy, Suspense} from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import './App.css';
import Header from "./components/header/header.component";
import {selectCurrentUser} from "./redux/user/user.selector.";
import {connect} from "react-redux";
import {checkUserSession} from "./redux/user/user.actions";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import {GlobalStyle} from "./global.styles";
import Spinner from "./components/spiner/spiner.component";
import ErrorBounderyComponent from "./components/error-boundery/error-boundery.component";
const HomePage =lazy(()=>import('./pages/homepage/homepage.component'))
const ShopPage = lazy(()=>import('./pages/shop/shop.page.component'))
const SignInAndSignUpPage = lazy(()=>import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const CheckotPage = lazy(()=>import('./pages/checkout/checkout.component'))


const App =({checkUserSession,currentUser})=>{

    const  unsubscribeFromAuth = null

      useEffect(()=>{
          checkUserSession()
      },[checkUserSession])


    return (
            <>
                <GlobalStyle/>
                <Header/>

                    <Suspense fallback={Spinner}>
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
                    </Suspense>

            </>

        );



}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch=>({
    checkUserSession:()=>dispatch(checkUserSession())
})




export default   connect(mapStateToProps, mapDispatchToProps)(App);
