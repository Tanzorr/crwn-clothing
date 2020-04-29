import React from "react";
import {createStructuredSelector} from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import CartItem from "../cart-item/cart-item.component";


import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import {CartDropdownContainer, CartButton,  CartItemContainer,EmptyMessage} from "./cart-dropdown.styles"

const CartDropdown =({cartItems, history, dispatch})=>{

    return <CartDropdownContainer>
                <CartItemContainer>
                    {cartItems.length ?(
                        cartItems.map(cartItem=>(
                        <CartItem key={cartItem.id} item={cartItem}/>
                    )))
                        :
                        (<EmptyMessage>You cart is empty</EmptyMessage> )
                    }
                </CartItemContainer>
                <CartButton onClick={()=> {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CartButton>
            </CartDropdownContainer>
}

const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps,)(CartDropdown))