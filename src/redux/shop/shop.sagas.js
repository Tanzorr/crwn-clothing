import {takeEvery,call,put} from 'redux-saga/effects'

import ShopActionTypes from "./shop.type";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectinsFailure, fetchCollectionsStart, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchColletctionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch (error) {
        yield put(fetchCollectinsFailure(error.message))
    }

}

export function* fetchCollectinsStart() {
    yield  takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchColletctionsAsync)
}