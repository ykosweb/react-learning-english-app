import {combineReducers, createStore} from "redux";
import practiceWordsReducer from "./practiceWordsReducer";

const reducers = combineReducers( {
    practiceWords: practiceWordsReducer
})


const store = createStore(reducers);

export default store;