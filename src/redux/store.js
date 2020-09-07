import {applyMiddleware, combineReducers, createStore} from "redux";
import learningWordsReducer from "./learningWordsReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers( {
    learningWordsPage: learningWordsReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;