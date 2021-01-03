let initialState = {
    authError: null,
    email: null,
    login: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null,

            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Логин или пароль введены не правильно, попробуйте ещё раз'
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('SIGN_OUT_SUCCESS')
            return state;
        case 'SIGN_UP_SUCCESS':
            console.log('SIGN_UP_SUCCESS')
            return {
                ...state,
                authError: null
            }
        case 'SIGN_UP_ERROR':
            console.log('SIGN_UP_ERROR')
            return {
                ...state,
                authError: action.error.message
            }
        case 'SIGN_UP_ERR':
            if (state.authError > 0)
                return true;
            return false;
        default:
            return state;
    }
};

export default authReducer;