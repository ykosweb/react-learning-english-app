import {combineReducers} from "redux";
import learningWordsReducer from "./learningWordsReducer";
import authReducer from "./authReducer";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

// type RootReducerType = {
//
// }

const rootReducer = combineReducers( {
    learningWordsPage: learningWordsReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;