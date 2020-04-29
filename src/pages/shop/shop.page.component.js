import React, {Component} from 'react';
import {Route} from "react-router-dom"
import {connect} from "react-redux"
import CollectionsOverview from "../../components/collections-overview/collection-overview.comopnent";
import CollectionPage from "../collection/collection.component";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spiner/with-spiner.component";

const CollectionsOverviewWithSpiner = WithSpinner(CollectionsOverview)
const CollectionsPageWithSpiner =WithSpinner(CollectionPage)

class ShopPage extends React.Component{
    state ={
        loading:true
    }
    unsubscribeFromSnapshot = null

    componentDidMount() {
      const {updateCollecitons} = this.props
      const collectionRef = firestore.collection('collections')
        collectionRef.get().then(async snapshot=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollecitons(collectionsMap)
            this.setState({
                loading:false
            })
        })
    }

    render() {
      const {match}=this.props
      const {loading}= this.state
      return (
          <div className='shop-page'>
              <Route exact path={`${match.path}`}
                     render={(props) => {
                         return <CollectionsOverviewWithSpiner
                             isLoading={loading} {...props}/>
                     }}/>


              <Route path={`${match.path}/:collectionId`}
              render={(props)=>{
                  return <CollectionsPageWithSpiner isLoading={loading} {...props}/>
              }}/>
          </div>
      );
  }

}

const mapDispatchToProps = dispatch=>({
    updateCollecitons:collectiondMap=>
        dispatch(updateCollections(collectiondMap))
})


export default connect(null,mapDispatchToProps)(ShopPage)
