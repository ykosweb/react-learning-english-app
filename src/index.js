import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {reduxFirestore, getFirestore, createFirestoreInstance} from "redux-firestore";
import {ReactReduxFirebaseProvider, getFirebase, reactReduxFirebase} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import {Router} from "react-router-dom";
import {useSelector} from 'react-redux'
import {isLoaded} from 'react-redux-firebase';
import Preloader from "./components/UI/Preloader/Preloader";
import history from './../src/config/history';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/react-fontawesome';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(fbConfig)
    )
);
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // useFirestoreForProfile: true // Firestore for About instead of Realtime DB
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

function AuthIsLoaded({children}) {
    const profile = useSelector(state => state.firebase.profile);
    if (!isLoaded(profile)) {
        return <Preloader/>;
    }
    return children
}

ReactDOM.render(
    <Provider store={store} >
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <Router history={history}>
                    <App/>
                </Router>
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
);