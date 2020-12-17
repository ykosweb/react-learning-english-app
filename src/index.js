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
import {BrowserRouter} from "react-router-dom";
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import Preloader from "./components/UI/Preloader/Preloader";


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

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) {
        return <Preloader />;
    }
    return children
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    <App/>
                </AuthIsLoaded>
            </ReactReduxFirebaseProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);