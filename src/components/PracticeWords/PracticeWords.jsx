import React from "react";
import classes from './PracticeWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionCounter from "./QuestionCounter/QuestionCounter";

const PracticeWords = props => {
    return (
        <div className={classes.practiceBlock}>
            <h2>Выберите правильный перевод.</h2>
            <ActiveWordQuestion />
            <QuestionCounter />

        </div>
    )
};

export default PracticeWords;