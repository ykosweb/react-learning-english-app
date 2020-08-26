import {combineReducers, createStore} from "redux";
import learningWordsReducer from "./learningWordsReducer";

const reducers = combineReducers( {
    practiceWords: learningWordsReducer
})


const store = createStore(reducers);

export default store;