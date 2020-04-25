import {createSelector} from "reselect";

const selectShop =state =>state.shop

export const  selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
        )

export const selectCollectionsForPerview = createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = (collectionUlParam)=>{
      //  const iD =COLLECTION_ID_MAP[collectionUlParam]
        return  createSelector(
            [selectCollections],
            collections=>collections[collectionUlParam]
        )
}
