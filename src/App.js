import React from "react";
import classes from "./App.module.sass";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import PracticeWords from "./components/PracticeWords/PracticeWords";

class App extends React.Component {
    render() {
        return (
            <div className={classes.app}>
                <Header />
                <div className={classes.mainContent}>
                    <Route
                        exact
                        path="/"
                        render={() => <MainPage/>} />
                    <Route path="/practice-words"
                           render={() => <PracticeWords/>} />

                </div>
            </div>
        )
    }
}

export default App;
