import {SET_VERBS, TOGGLE_LOADING} from "../actionsType";


const initialState = {
    verbs: [],
    activeVerbNumber: 0,
    toggleLoading: true
};

const learningVerbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERBS: {
            return (
                {...state, verbs: action.verbs}
            )
        }
        case TOGGLE_LOADING: {
            return (
                {...state, toggleLoading: false}
            )

        }
        default:
            return state
    }
};

export default learningVerbsReducer;