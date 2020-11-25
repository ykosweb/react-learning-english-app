const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

let initialState = {
    authError: null,
    email: null,
    login: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('login success')
            return {
                ...state,
                authError: null,

            }
        case LOGIN_ERROR:
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        default:
            return state;
    }
};

const loginSuccess = () => ({type: LOGIN_SUCCESS});
const loginError = (error) => ({type: LOGIN_ERROR, error})

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

export default authReducer;