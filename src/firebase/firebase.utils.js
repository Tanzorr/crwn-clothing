import firebase, {initializeApp} from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyADn49JKnEtaR2gHKaNdan1hmue9ZX6oa0",
    authDomain: "crown-db-6333d.firebaseapp.com",
    databaseURL: "https://crown-db-6333d.firebaseio.com",
    projectId: "crown-db-6333d",
    storageBucket: "crown-db-6333d.appspot.com",
    messagingSenderId: "98584581238",
    appId: "1:98584581238:web:83060d9d5bdee97ad03b57",
    measurementId: "G-9WFJ5Z3210"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const collectionRef = firestore.collection('users')
   // console.log("Fire store",userRef)

     const snapShot = await userRef.get()
    const collectionSnapshot = await collectionRef.get()
    console.log("collection snapshot",{colection:collectionSnapshot.docs.map(doc=>doc.data())})



    if (!snapShot.exists){
        const {displayName,email}=userAuth
        const createAt =new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch (error) {

            console.log('error creating user', error.message)
        }
    }
    return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach((obj)=>{
        const newDocRef = collectionRef.doc();
        console.log("new dOC REF",newDocRef)
        batch.set(newDocRef,obj)
    })
    return await batch.commit()
}

export  const convertCollectionsSnapshotToMap =(collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
        const {title,items}= doc.data()

        return{
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })

  return  transformedCollection.reduce((accumulator, collection)=>{
       accumulator[collection.title.toLowerCase()]=collection
       return accumulator
   },{})

}


firebase.initializeApp(config)

export const auth =firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithCoogle = ()=>auth.signInWithPopup(provider)


export default firebase
