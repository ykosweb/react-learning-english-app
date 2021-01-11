import React from "react";
import classes from "./App.module.sass";
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LearningVerbsContainer from "./components/LearningVerbs/LearningVerbsContainer";
import Aside from "./components/Aside/Aside";
import LearningWordsContainer from "./components/LearningWords/LearningWordsContainer";
import RegistrationForm from "./components/Auth/SignUp/SignUp";
import SignIn from "./components/Auth/SignIn/SignIn";
import 'bootstrap/dist/css/bootstrap.css';
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Results from "./components/Results/Results";
import About from "./components/About/About";

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
                        render={() => <LearningVerbsContainer/>}/>
                    <Route
                        path="/profile"
                        render={() => <Profile/>}/>
                    <Route
                        path="/friends/:uid"
                        render={() => <Friends/>}/>
                    <Route
                        path="/results"
                        render={() => <Results/>}/>
                    <Route
                        path="/about"
                        render={() => <About/>}/>
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
