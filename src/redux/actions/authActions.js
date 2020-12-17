const loginSuccess = () => ({type: 'LOGIN_SUCCESS'});
const loginError = (error) => ({type: 'LOGIN_ERROR', error});
const signOutSuccess = () => ({type: 'SIGN_OUT_SUCCESS'})

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            ).then(() => {
            dispatch(loginSuccess())
        }).catch((error) => {
            dispatch(loginError(error))
        })
    }
}

export const signOut = () => {
    debugger;
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch(signOutSuccess())
        })
    }
}