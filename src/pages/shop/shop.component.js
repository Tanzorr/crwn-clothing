import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";
import ColectionsPriview from "../../components/priview-collection/collections-priview.component";

class ShopComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            collections:SHOP_DATA
        }

    }
    render() {
        const {collections}=this.state
        return (
            <div className='shop-page'>
                {collections.filter((item,idx)=>idx<4)
                    .map(({id,...otherCollectionsProps})=>(
                    <ColectionsPriview key={id}{...otherCollectionsProps}/>
                    ))}
            </div>
        );
    }
}

export default ShopComponent;