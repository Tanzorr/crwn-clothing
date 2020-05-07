import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import './collection-overview.style.scss'
import ColectionsPriview from "../priview-collection/collections-priview.component";
import {selectCollectionsForPerview} from "../../redux/shop/shop.selector";


const CollectionsOverview =({collections})=>(
   <div className=" collections-overview ">
       {collections.map(({id,...otherCollectionsProps})=>(
               <ColectionsPriview key={id}{...otherCollectionsProps}/>
           ))}
   </div>
)


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPerview
})


export default connect(mapStateToProps )(CollectionsOverview)