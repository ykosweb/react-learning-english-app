import React from "react";
import classes from './LearningWords.module.sass';
import ActiveWordQuestion from "./ActiveWordQuestion/ActiveWordQuestion";
import QuestionsCounter from "./QuestionsCounter/QuestionsCounter";
import ProgressBarContainer from "../UI/ProgressBarContainer/ProgressBarContainer";
import {AnswerStateType, QuestionType} from "../../redux/TypeScriptTypes";

type PropsType = {
    successWords: number
    questions: Array<QuestionType>
    choseAnswer: () => void
    answerState: null | AnswerStateType
    activeQuestionNum: number
}

const LearningWords: React.FC<PropsType> =
    ({successWords,
         questions,
         choseAnswer,
         answerState,
         activeQuestionNum}) => {

    return (
        <div className={classes.learningWords}>
            <div className={classes.wordsSuccess}>Выучено слов: &nbsp;
                <span className={classes.successNumber}>{successWords}</span>
            </div>
            <div>
                <h2>Выберите правильный перевод</h2>
                <div className={classes.questionBlock}>
                    <ActiveWordQuestion
                        questions={questions}
                        activeQuestionNum={activeQuestionNum}
                        choseAnswer={choseAnswer}
                        answerState={answerState}
                    />
                    <QuestionsCounter
                        questionCounter={questions.length}
                        activeQuestionNum={activeQuestionNum}
                    />

                </div>
                <ProgressBarContainer successWords={successWords}/>
            </div>
        </div>
    )
};

export default LearningWords;