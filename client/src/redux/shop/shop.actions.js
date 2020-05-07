import ShopActionTypes from "./shop.type";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = ()=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})

export const fetchCollectinsFailure= errorMessage=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FALURE,
    payload:errorMessage
})

export const fetchCollectionsStartAsync=()=>{
    return dispatch=>{
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())
        collectionRef.get().then(async snapshot=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error=>dispatch(fetchCollectinsFailure(error.message)))
    }
}