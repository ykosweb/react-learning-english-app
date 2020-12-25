const loginSuccess = () => ({type: 'LOGIN_SUCCESS'});
const loginError = (error) => ({type: 'LOGIN_ERROR', error});
const signOutSuccess = () => ({type: 'SIGN_OUT_SUCCESS'});
const signUpSuccess = () => ({type: 'SIGN_UP_SUCCESS'})
const signUpError = (error) => ({type: 'SIGN_UP_ERROR', error})

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

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                name: newUser.name,
                learningWordsScore: 0,
                learningVerbsScore: 0
            })
        }).then(() => {
            dispatch(signUpSuccess())
        }).catch((error) => {
            dispatch(signUpError(error))
        })
    }
}