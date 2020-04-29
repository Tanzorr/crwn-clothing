import React from "react";
import {connect} from "react-redux"
import {clearItemFromCart,addItem,removeItem} from "../../redux/cart/cart.actions";
import {CheckoutItemContainer, CheckoutImageContainer, TextContainer, QuontatyContnatiner,RemoveButton} from "./checkout-item.styles"


const CheckoutItem =({cartItem,clearItem, addItem, removeItem})=> {

    const {name, imageUrl, price, quantity}=cartItem

    return <CheckoutItemContainer>
                <CheckoutImageContainer >
                    <img src={imageUrl} alt="item"/>
                </CheckoutImageContainer>
                <TextContainer>{name}</TextContainer>
                <QuontatyContnatiner>
                    <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                         <span className="value">{quantity}</span>
                    <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
                </QuontatyContnatiner>
                <span className="price">{price}</span>
            <RemoveButton onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButton>
            </CheckoutItemContainer>
}

const mapDispatchToProps = dispatch =>({
    clearItem: item=>dispatch(clearItemFromCart(item)),
    addItem:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)