import React from "react";
import {createStructuredSelector} from "reselect";
import {ReactComponent as Logo} from "../../assets/original.svg";
import {connect} from 'react-redux'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector.";
import {HeaderContainer,LogoContainer,OptionLink, OptionsContainer, } from './header.styles'
import {signOutStart} from "../../redux/user/user.actions";


const Header =({currentUser,hidden, signOutStart})=>{
    return<HeaderContainer>
        <LogoContainer to="/" >
        <Logo className='logo'/>
        </LogoContainer>
    <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink  to='/shop'>
            CONTACT
        </OptionLink>

        {

            currentUser!==null?

                <OptionLink as={`div`} onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
        }
        <CartIcon/>
    </OptionsContainer>
        {
            hidden?null:
            <CartDropdown/>
        }

</HeaderContainer>
}

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

const mapDispatchToProps =dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)