import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user.actions";



class App extends React.Component{
    unsubscribeFromAuth = null
    componentDidMount() {
        const {setCurrentUser} = this.props
            this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
           setCurrentUser({currentUser: userAuth})
           if (userAuth) {
               const userRef = await createUserProfileDocument(userAuth)
               userRef.onSnapshot(snapShot => {
                 setCurrentUser({
                     id: snapShot.id,
                     ...snapShot.data()
                 })
               })
           }
       })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }


    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Route exact  path={`/`} component={HomePage}/>
                    <Route  path={`/shop`} component={ShopComponent}/>
                    <Route  path={`/signin`} component={SignInAndSignUpPage}/>
                </div>
            </div>
        );
    }


}

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user=> dispatch(setCurrentUser(user))
})


export default connect(null,mapDispatchToProps)(App);
