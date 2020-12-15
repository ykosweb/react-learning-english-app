import React from "react";
import classes from './LearningWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionsCounter from "./QuestionsCounter/QuestionsCounter";
import ProgressBarContainer from "../UI/ProgressBarContainer/ProgressBarContainer";

const LearningWords = props => {
    return (
        <div className={classes.learningWords}>
            <div className={classes.wordsSuccess}>Выучено слов за сегодня &nbsp;
                <span className={classes.successNumber}>{props.successWords}</span>
            </div>
            <div>
                <h2>Выберите правильный перевод</h2>
                <div className={classes.questionBlock}>
                    <ActiveWordQuestion
                        questions={props.questions}
                        activeQuestionNum={props.activeQuestionNum}
                        choseAnswer={props.choseAnswer}
                        answerState={props.answerState}
                    />
                    <QuestionsCounter
                        questionCounter={props.questions.length}
                        activeQuestionNum={props.activeQuestionNum}
                    />

                </div>
                <ProgressBarContainer successWords={props.successWords}/>
            </div>
        </div>
    )
};

export default LearningWords;