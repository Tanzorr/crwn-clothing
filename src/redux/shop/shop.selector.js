import {createSelector} from "reselect";

const selectShop =state =>state.shop

export const  selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
        )

export const selectCollectionsForPerview = createSelector(
    [selectCollections],
    collections=>
        collections ? Object.keys(collections).map(key=>collections[key]) :[]
)

export const selectCollection = (collectionUlParam)=>{
      //  const iD =COLLECTION_ID_MAP[collectionUlParam]
        return  createSelector(
            [selectCollections],
            collections=>(collections ? collections[collectionUlParam] :null)
        )
}

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
)