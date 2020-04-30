import React, {Component} from 'react';
import {Route} from "react-router-dom"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect";
import CollectionsOverview from "../../components/collections-overview/collection-overview.comopnent";
import CollectionPage from "../collection/collection.component";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spiner/with-spiner.component";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selector";

const CollectionsOverviewWithSpiner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpiner =WithSpinner(CollectionPage)

class ShopPage extends React.Component{
    componentDidMount() {
        const { fetchCollectionsStartAsync} =this.props
        fetchCollectionsStartAsync();
    }

    render() {
      const {match,  isCollectinFetching}=this.props

      return (
          <div className='shop-page'>
              <Route exact path={`${match.path}`}
                     render={(props) => {
                         return <CollectionsOverviewWithSpiner
                             isLoading={isCollectinFetching} {...props}/>
                     }}/>


              <Route path={`${match.path}/:collectionId`}
              render={(props)=>{
                  return <CollectionsPageWithSpiner isLoading={isCollectinFetching} {...props}/>
              }}/>
          </div>
      );
  }

}

const mapStateToProps = createStructuredSelector({
    isCollectinFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())

})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)
