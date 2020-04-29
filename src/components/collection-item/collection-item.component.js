import React from "react";
import {connect} from 'react-redux'
import {addItem} from "../../redux/cart/cart.types";
import {
    AddButton,
    CollectionFooterContainer,
    CollectionItemContainer,
    ImageContainer,
    NameContaineer, PriceConatainer
} from "./collection-item.styles";

const CollectionItem = ({item,addItem})=>{
    const { name, price, imageUrl}=item
    return( <CollectionItemContainer>
                <ImageContainer
                     style={{
                         backgroundImage:`url(${imageUrl})`
                     }}
                >

                </ImageContainer>
                <CollectionFooterContainer>
                    <NameContaineer>{name}</NameContaineer>
                    <PriceConatainer>{price}</PriceConatainer>
                </CollectionFooterContainer>
                <AddButton inverted onClick={()=> addItem(item)} inverted>
                    Add to cart</AddButton>

            </CollectionItemContainer>)
}




const mapDispatchToProps = dispatch=>({
    addItem:item=>dispatch(addItem(item))
})

export  default connect(null,mapDispatchToProps)(CollectionItem)