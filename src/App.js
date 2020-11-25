import React from "react";
import classes from "./App.module.sass";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LearningVerbs from "./components/LearningVerbs/LearningVerbs";
import Aside from "./components/Aside/Aside";
import LearningWordsContainer from "./components/LearningWords/LearningWordsContainer";
import RegistrationForm from "./components/Auth/RegistrationForm/RegistrationForm";
import SignIn from "./components/Auth/SignIn/SignIn";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {

    render() {
        return (
            <div className={classes.app}>
                <Header/>
                <main className={classes.main}>
                    <Route
                        exact
                        path="/"
                        render={() => <MainPage/>}/>
                    <Route
                        path="/learning-words"
                        render={() => <LearningWordsContainer/>}/>
                    <Route
                        path="/learning-verbs"
                        render={() => <LearningVerbs/>}/>
                    <Route
                        path="/registration"
                        render={() => <RegistrationForm/>}/>
                    <Route
                        path="/signin"
                        render={() => <SignIn/>}/>
                </main>
                <Aside/>
            </div>
        )
    }
}

export default App;
