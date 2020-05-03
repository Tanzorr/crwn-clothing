import UserActionTypes from "./user.types";


export const googleSignInStart=()=>({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const SignInSuccess=(user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const  SignInFailure=error=>({
    type:UserActionTypes.SIGN_IN_FAULURE,
    payload:error
})

export const emailSignInStart=(emailAndPassword)=>({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

export const checkUserSession =()=>({
    type:UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart =()=>({
    type:UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess =()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFaulare =(error)=>({
    type:UserActionTypes.SIGN_OUT_FAULURE,
    payload:error
})

export const signUpStart =()=>({
    type:UserActionTypes.SICN_UP_START,
})

export const signUpSuccess =()=>({
    type:UserActionTypes.SICN_UP_SUCCESS,
})

export const signUpFaulare =(error)=>({
    type:UserActionTypes.SICN_UP_FAULURE,
    payload:error
})
