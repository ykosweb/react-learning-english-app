import {combineReducers} from "redux";
import learningWordsReducer from "./learningWordsReducer";
import learningVerbsReducer from "./learningVerbsReducer";
import authReducer from "./authReducer";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

type RootReducerType = typeof rootReducer; // (globalState: appStateType) => appStateType
export type AppStateType = ReturnType<RootReducerType>

const rootReducer = combineReducers( {
    learningWords: learningWordsReducer,
    learningVerbs: learningVerbsReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;