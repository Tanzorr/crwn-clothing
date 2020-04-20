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
   // console.log("Fire store",userRef)

     const snapShot = await userRef.get()
    console.log("Fire store",snapShot)
    console.log("user Auth",userAuth)

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


firebase.initializeApp(config)

export const auth =firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt:'select_account'})

export const signInWithCoogle = ()=>auth.signInWithPopup(provider)


export default firebase
