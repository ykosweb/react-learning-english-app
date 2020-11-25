import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {
    reduxFirestore,
    getFirestore,
    createFirestoreInstance
} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import {BrowserRouter} from "react-router-dom";


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(fbConfig)
    )
);


const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App/>
            </ReactReduxFirebaseProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);


serviceWorker.unregister();