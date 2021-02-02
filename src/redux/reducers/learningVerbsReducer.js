import {SET_VERBS, LOADING_VERBS} from "../actionsType";

const initialState = {
    verbs: [],
    activeVerbNumber: 0,
    loadingVerbs: true
};

const learningVerbsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VERBS: {
            return (
                {...state, verbs: action.verbs}
            )
        }
        case LOADING_VERBS: {
            return (
                {...state, loadingVerbs: false}
            )

        }
        default:
            return state
    }
};

export default learningVerbsReducer;