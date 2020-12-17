const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

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
            return {
                ...state,
                authError: 'Логин или пароль введены не правильно, попробуйте ещё раз'
            }
        case SIGN_OUT_SUCCESS:
            console.log('SIGN_OUT_SUCCESS')
            return state;
        default:
            return state;
    }
};

export default authReducer;